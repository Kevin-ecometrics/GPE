import React from "react";
import { motion } from "framer-motion";

function Service() {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "100vw",
    },
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "-100vw",
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1.5,
  };

  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="h-screen justify-center items-center flex bg-white"
    >
      <h1>Service Page</h1>
    </motion.main>
  );
}

export default Service;
