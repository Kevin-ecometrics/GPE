import { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const words = ["Edificando", "Negocios"];
  const [mouseX, setMouseX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMouseX(event.clientX - rect.left - rect.width / 2);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMouseX(0);
  };
  return (
    <section
      id="hero"
      className="md:py-4 flex md:flex-row flex-col justify-center items-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-screen px-8 md:px-0 md:py-0 py-40">
        <div className="md:hidden block">
          <img src="/gpeHero2.png" alt="hero element" title="hero element" />
        </div>
        <div className="flex justify-center items-center md:items-start flex-col">
          {words.map((word, wordIndex) => (
            <div key={wordIndex} className="flex">
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  className="text-[80px] md:text-[112px] text-[#D2D2D0] uppercase"
                  whileHover={{ scale: 1.2 }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          ))}
        </div>
        <div className="md:flex hidden justify-center items-center">
          <motion.img
            src="/gpeHero2.png"
            alt="hero element"
            title="hero element"
            className="translate-y-[-200px]"
            animate={{
              y: [-200, 0, -200],
              x: isHovered ? mouseX * -0.3 : 0,
            }}
            transition={{
              y: {
                duration: 7,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              },
              x: {
                type: "spring",
                stiffness: 300,
                damping: 30,
              },
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
