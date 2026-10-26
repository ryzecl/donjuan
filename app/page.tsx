import { Navbar } from "@/components/Navbar";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { ExperienceDossier } from "@/components/ExperienceDossier";
import { ContactStation } from "@/components/ContactStation";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-[#FFE600] selection:text-black">
      <Navbar />
      <MarqueeBanner />

      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <ProjectsSection />
        <SkillsMatrix />
        <ExperienceDossier />
        <ContactStation />
      </main>

      <Footer />
    </div>
  );
}
