import { Galery } from "@/components/Galery";
import { PrincipalCard } from "@/components/PrincipalCard";
import { Clients } from "@/components/Clients";
import { Experience } from "@/components/Experience";
import { Arrow } from "@/svg/Arrow";
import { AboutMe } from "@/components/AboutMe";

export default function Home() {
  return (
    <main>
      <section className="md:grid md:grid-cols-2 gap-3 md:h-[600px]">
        <PrincipalCard />
        <Galery />
      </section>
      <Clients />
      <AboutMe />
      <Experience />
    </main>
  );
}
