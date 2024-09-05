"use client";
import { Image } from "@nextui-org/react";
import React from "react";
import { motion } from "framer-motion";

export const AboutMe = () => {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      className="container flex flex-col items-center mx-auto mt-[200px] gap-6 px-2"
    >
      <h3 className="text-xl font-semibold text-center uppercase mb-8">
        Acerca de mi
      </h3>
      <div className="flex justify-center gap-6 md:flex-row flex-col items-center">
        <figure>
          <Image
            isBlurred
            width={300}
            src="/myPhoto.webp"
            alt="Abraham Rojas"
          />
        </figure>
        <p className="text-center md:text-start md:w-[50%]">
          Soy un desarrollador frontend especializado en React y Vue, con
          experiencia en la integración de inteligencia artificial en diversos
          proyectos. He liderado el desarrollo de un CRM para una academia de
          deportes, incorporando funcionalidades de analíticas de productividad,
          registro de pagos y un sistema de ecommerce. Además, he trabajado en
          el desarrollo de una página web para una empresa de electrodomésticos
          en Panamá, optimizando la experiencia del usuario y mejorando la
          presencia digital de la marca. Actualmente, formo parte del equipo de
          tecnología de Aqomi, donde contribuyo a la creación de soluciones
          innovadoras y escalables para nuestros clientes
        </p>
      </div>
    </motion.section>
  );
};
