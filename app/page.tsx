import { Background } from "@/components/layout/Background";
import { NavDots } from "@/components/ui/NavDots";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { Divider } from "@/components/ui/Divider";

export default function Home() {
  return (
    <div className="">
      
      <Background />
      Fixed overlays
      <div className="scanlines" />
      <NavDots />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <HeroSection />
        <Divider />
        <SkillsSection />
        <Divider />
        <ProjectsSection />
        <Divider />
        <AboutSection />
        <Divider />
        <ContactSection />
        <Footer />
      </main>

      {/* <Footer /> */}
    </div>
  );
}
