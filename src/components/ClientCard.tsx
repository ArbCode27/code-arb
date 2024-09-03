import { Button, Card, CardFooter, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import React from "react";

export const ClientCard = ({
  delay,
  image,
}: {
  delay: number;
  image: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, delay: delay }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <Image
        alt="Woman listing to music"
        className="object-cover max-h-[100px]"
        src={image}
        width={280}
      />
    </motion.div>
  );
};
