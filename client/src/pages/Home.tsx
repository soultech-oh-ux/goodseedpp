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
      <AboutSection />
      <CentersSection />
      <ProgramsSection />
      <NewsSection />
      <SupportSection />
    </div>
  );
}
