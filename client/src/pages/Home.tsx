import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CentersSection from "@/components/CentersSection";
import ProgramsSection from "@/components/ProgramsSection";
import NewsSection from "@/components/NewsSection";
import SupportSection from "@/components/SupportSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="centers">
        <CentersSection />
      </div>
      <div id="programs">
        <ProgramsSection />
      </div>
      <div id="news">
        <NewsSection />
      </div>
      <div id="support">
        <SupportSection />
      </div>
    </div>
  );
}
