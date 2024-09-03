import { Rectangulo } from "@/svg/Rectangulo";
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const PrincipalCard = () => {
  return (
    <section className="h-[600px] mb-32">
      <div className="container mx-auto flex flex-col lg:pl-20 justify-center gap-4 w-full h-full relative">
        <Rectangulo translateX={20} translateY={-66} />
        <motion.h2
          initial={{ translateY: 20, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          className="text-2xl"
        >
          Soy abraham<span className="text-[#00A8CC] text-3xl">,</span>
        </motion.h2>
        <motion.h1
          initial={{ translateY: -20, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-[324px] md:w-[400px] md:text-[80px] text-[64px] font-[800] leading-[60px] relative"
        >
          Frontend Developer
          <motion.span
            initial={{ translateY: 10, translateX: 66, opacity: 0 }}
            animate={{ translateY: -4, opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="text-[#00A8CC] block absolute top-[64px] right-[50px]"
          >
            .
          </motion.span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut", delay: 1.8 }}
          className="md:hidden absolute bottom-0 flex w-full justify-center"
        >
          <MdOutlineKeyboardArrowDown size={40} />
        </motion.div>
      </div>
    </section>
  );
};
