import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const MAX_DAILY_BATCH = 50;

async function getAccessToken(): Promise<string | null> {
  const CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;
  const CLIENT_SECRET = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
  const REFRESH_TOKEN = process.env.GOOGLE_OAUTH_REFRESH_TOKEN;

  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    return null;
  }

  try {
    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        refresh_token: REFRESH_TOKEN,
        grant_type: 'refresh_token',
      }),
    });

    const data = await response.json();
    return data.access_token || null;
  } catch {
    return null;
  }
}

export async function GET(request: Request) {
  try {
    const hostHeader = request.headers.get('host') || '';
    const HOST = hostHeader.split(':')[0] || 'www.expertpergolabioclimatique.fr';

    const token = await getAccessToken();
    if (!token) {
      return NextResponse.json({
        success: false,
        error: 'Missing or invalid Google OAuth2 credentials'
      }, { status: 500 });
    }

    const sitemapUrl = `https://${HOST}/sitemap.xml`;
    const sitemapRes = await fetch(sitemapUrl, { cache: 'no-store' });
    if (!sitemapRes.ok) {
      return NextResponse.json({ success: false, error: 'Failed to fetch sitemap' }, { status: 502 });
    }

    const xml = await sitemapRes.text();
    const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)];
    const urls = matches.map(m => m[1]);

    if (urls.length === 0) {
      return NextResponse.json({ success: false, error: 'No URLs found in sitemap' }, { status: 400 });
    }

    const batch = urls.slice(0, MAX_DAILY_BATCH);
    let successCount = 0;
    let failCount = 0;

    for (const url of batch) {
      try {
        const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            url,
            type: 'URL_UPDATED',
          }),
        });

        if (res.ok) {
          successCount++;
        } else {
          failCount++;
        }
      } catch {
        failCount++;
      }
    }

    return NextResponse.json({
      success: true,
      provider: 'Google Indexing API (OAuth2)',
      submitted: successCount,
      failed: failCount,
      totalBatch: batch.length,
      message: `Successfully processed ${successCount}/${batch.length} URLs with Google Indexing API`
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
