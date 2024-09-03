"use client";
import { Galery } from "@/components/Galery";
import { PrincipalCard } from "@/components/PrincipalCard";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import { Clients } from "@/components/Clients";
import { Experience } from "@/components/Experience";

export default function Home() {
  return (
    <main>
      <section className="md:grid md:grid-cols-2 gap-3 md:h-[600px]">
        <PrincipalCard />
        <Galery />
      </section>
      <motion.div
        initial={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1.8, ease: "easeInOut", delay: 1.8 }}
        className="hidden md:flex w-full justify-center pt-6"
      >
        <MdOutlineKeyboardArrowDown size={40} />
      </motion.div>
      <Clients />
      <Experience />
    </main>
  );
}
