import { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const words = ["Edificando", "Negocios"];

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY, currentTarget } = event;
    const { offsetWidth, offsetHeight } = currentTarget;
    const x = (clientX - offsetWidth / 2) / 20;
    const y = (clientY - offsetHeight / 2) / 20;
    setPosition({ x, y });
  };

  return (
    <section className="py-4 flex md:flex-row flex-col justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 w-screen px-8 md:px-0">
        <div className="md:hidden block">
          <img src="/gpeHero2.png" alt="hero element" title="hero element" />
        </div>
        <div className="flex justify-center items-center md:items-start flex-col">
          {words.map((word, wordIndex) => (
            <div key={wordIndex} className="flex">
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  className="text-[90px] md:text-[112px] text-[#D2D2D0] uppercase"
                  whileHover={{ scale: 1.2 }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          ))}
        </div>
        <div
          className="md:flex hidden justify-center items-center"
          onMouseMove={handleMouseMove}
        >
          <motion.img
            src="/gpeHero2.png"
            alt="hero element"
            title="hero element"
            animate={{
              x: position.x,
              y: position.y,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
