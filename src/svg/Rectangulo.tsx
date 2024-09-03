"use client";
import React from "react";
import { motion } from "framer-motion";

type props = {
  translateY: number;
  translateX: number;
};
export const Rectangulo: React.FC<props> = ({ translateX, translateY }) => {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1.3,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      className="absolute"
      initial={{ translateY: translateY, translateX: translateX, scale: 1.3 }}
    >
      <motion.svg
        width="200"
        height="66"
        viewBox="0 0 327 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={"hidden"}
        viewport={{ once: true }}
        whileInView="visible"
      >
        <motion.path
          d="M324 1H3C1.89543 1 1 1.89543 1 3V40C1 41.1046 1.89542 42 2.99999 42H324C325.105 42 326 41.1046 326 40V3C326 1.89543 325.105 1 324 1Z"
          stroke="#00A8CC"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linejoin="round"
          viewport={{ once: true }}
          variants={icon}
        />
      </motion.svg>
    </motion.div>
  );
};
