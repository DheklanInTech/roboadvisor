"use client"
import React from "react";
import { motion } from "framer-motion";

const AnimatedTextWord = ({ text }) => {
  const words = text.split(" ");

// Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.02 * i },
    }),
  };

// Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex",}}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.h1
          variants={child}
          style={{ marginRight: "5px" }}
          key={index}
          className='text-center lg:text-5xl md:text-2xl text-2xl font-semibold'
        >
          {word}
        </motion.h1>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;