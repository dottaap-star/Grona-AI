import LandingPage02 from "@/landing-page-02";
import { FooterLarge01 } from "@/app/home-screen";
import { HeaderWithNavigation as Header } from "@/components/marketing/header-navigation/header-with-navigation";

export default function FeaturesPage() {
    return (
        <div className="bg-primary">
            <Header isFloating />
            <LandingPage02 />
            <FooterLarge01 />
        </div>
    );
}
