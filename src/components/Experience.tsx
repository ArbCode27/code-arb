"use client";
import { Image } from "@nextui-org/react";
import React from "react";
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <section className="container md:mx-auto max-w-[1024px] mt-[200px] space-y-12 px-2 pb-20 md:pb-0">
      <h3 className="text-center uppercase text-xl font-semibold mb-20">
        Experiencia
      </h3>
      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 justify-self-center items-center"
      >
        <div className="flex flex-col md:items-start items-center justify-center gap-2 max-w-[400px] relative z-[1000]">
          <h4 className="text-xl">Aqomi</h4>
          <p className="text-center md:text-start">
            He contribuido al desarrollo de soluciones tecnológicas innovadoras
            para una variedad de clientes. Mi trabajo se ha centrado en la
            creación de interfaces de usuario intuitivas y responsivas,
            optimizando la experiencia del usuario en cada proyecto. He
            implementado funcionalidades avanzadas, colaborado estrechamente con
            equipos de diseño y backend, y asegurado que nuestras aplicaciones
            cumplan con los más altos estándares de calidad y rendimiento.
          </p>
          <div className="flex gap-4 mt-4">
            <Image src="/react.webp" width={60} alt="react" />
            <Image src="/next.webp" width={90} alt="next" />
            <Image src="/wp.webp" width={60} alt="wordpress" />
          </div>
        </div>
        <figure className="w-[100%] flex justify-center mt-4 md:mt-0 mb-12 md:mb-0">
          <Image
            src="https://nextui.org/images/card-example-3.jpeg"
            alt="NextUI Album Cover"
            className=" md:hidden w-full"
            width={300}
          />
          <Image
            isBlurred
            src="https://nextui.org/images/card-example-3.jpeg"
            alt="NextUI Album Cover"
            className="hidden md:block m-5 w-full"
            width={300}
          />
        </figure>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        className="grid md:grid-cols-2 md:gap-12"
      >
        <figure className="w-full flex justify-center">
          <Image
            isBlurred
            src="https://nextui.org/images/card-example-2.jpeg"
            alt="NextUI Album Cover"
            className="hidden md:block m-5 w-full"
          />
        </figure>
        <div className="w-full flex flex-col items-center md:items-start justify-center gap-2  max-w-[500px] relative z-[1000]">
          <h4 className="text-xl">Weebo</h4>
          <p className="text-center md:text-start">
            Crear una UI responsiva, intuitiva, accesible con buen SEO donde los
            alumnos puedan navegar con facilidad y comodidad. Desarrollar un
            panel administrativo donde muestren las meticas y analíticas de los
            datos recogidos en el mes en cuanto al volumen de personas en cada
            una de las clases de la academia, al igual que los pagos hechos y la
            productividad de los empleados. Esta herramienta está ayudando a
            optimizar procesos de venta de clases y manejo de alumnos, ya que se
            automatiza toda la inscripción y la gestión del cliente.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Image src="/react.webp" width={60} alt="react" />
            <Image src="/next.webp" width={90} alt="next" />
            <Image src="/tailwind.webp" width={60} alt="wordpress" />
          </div>
        </div>
        <figure className="w-full md:hidden flex justify-center mt-4 md:mt-0 mb-12 md:mb-0">
          <Image
            src="https://nextui.org/images/card-example-2.jpeg"
            alt="NextUI Album Cover"
            className=" w-full"
          />
        </figure>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        className="grid md:grid-cols-2"
      >
        <div className="flex flex-col md:items-start items-center justify-center gap-2 max-w-[400px] relative z-[1000]">
          <h4 className="text-xl">AIplay</h4>
          <p className="text-center md:text-start">
            Mi tarea fué una UI responsiva, intuitiva, accesible con buen SEO
            donde los usuarios puedan navegar con facilidad y comodidad. Creando
            una experiencia de usuario fluida y cómoda utilizando Next.js. Cree
            funciones para consumir un api de predicciones deportivas con IA
            integrando también manejo de usuarios y autenticación. También tuve
            que crear propuestas de valor en cuanto a la lógica de los procesos
            de navegación, experiencia de usuario, diseño de la página y buenas
            prácticas
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Image src="/react.webp" width={60} alt="react" />
            <Image src="/next.webp" width={90} alt="next" />
            <Image src="/tailwind.webp" width={60} alt="wordpress" />
          </div>
        </div>
        <figure className="w-full flex justify-center mt-4 md:mt-0 mb-12 md:mb-0">
          <Image
            src="https://nextui.org/images/card-example-4.jpeg"
            alt="NextUI Album Cover"
            className="md:hidden w-full"
          />
          <Image
            isBlurred
            src="https://nextui.org/images/card-example-4.jpeg"
            alt="NextUI Album Cover"
            className="hidden md:block m-5 w-full"
          />
        </figure>
      </motion.div>
    </section>
  );
};
