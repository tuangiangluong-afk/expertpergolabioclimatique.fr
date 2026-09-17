import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <GoogleAnalytics GA_MEASUREMENT_ID="G-QNPM2KD0CP" />
            {children}
            <CookieBanner slug="home" cityName="Expert Pergola Bioclimatique" />
        </>
    );
}
