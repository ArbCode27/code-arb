"use client";
import React from "react";
import { ClientCard } from "./ClientCard";

export const Clients = () => {
  return (
    <section className="relative flex flex-col items-center gap-3 mt-[200px] ">
      <div className="bubble w-[80px] h-[80px] absolute md:-bottom-8 -bottom-16  md:right-20 -right-8"></div>
      <div className="bubble w-[80px] h-[80px] absolute top-0 md:left-20 -left-8"></div>
      <h4 className="text-center mb-4 text-xl font-semibold uppercase">
        Empresas con las que he trabajado
      </h4>
      <div className="flex gap-8 justify-center items-center">
        <ClientCard image="/aqomiLogo.webp" delay={0} />
        <ClientCard image="/nelmarLogo.webp" delay={0.2} />
        <ClientCard image="/weeboLogo.webp" delay={0.3} />
      </div>
    </section>
  );
};
