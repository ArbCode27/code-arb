"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const Arrow = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 12 }}
      transition={{ duration: 1.8, ease: "easeInOut", delay: 1.8 }}
      className="hidden md:flex w-full justify-center"
    >
      <MdOutlineKeyboardArrowDown size={40} />
    </motion.div>
  );
};
