import { motion } from "framer-motion";
import Tower from "@components/Index/Tower";

const Hero = () => {
  const words = ["Grupo", "de", "Planeación", "Empresarial"];

  return (
    <section
      id="hero"
      className="md:py-4 flex md:flex-row flex-col justify-center items-center md:h-screen"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-full ">
        <div className="md:hidden block mt-32">
          <Tower />
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="flex flex-wrap justify-center md:justify-start">
            {words.map((word, wordIndex) => (
              <div key={wordIndex} className="flex">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    className={`text-[40px] sm:text-[60px] md:text-[80px] lg:text-[112px] ${
                      ["G", "P", "E"].includes(letter)
                        ? "text-[#F29829]"
                        : "text-[#D2D2D0]"
                    } uppercase`}
                    whileHover={word !== "" ? { scale: 1.2 } : {}}
                  >
                    {letter}
                  </motion.span>
                ))}
                {wordIndex < words.length - 1 && (
                  <span className="ml-2 sm:ml-4">&nbsp;</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="md:block hidden px-16">
          <Tower />
        </div>
      </div>
    </section>
  );
};

export default Hero;
