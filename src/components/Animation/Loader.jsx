import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["EDIFICANDO", "NEGOCIOS"];

const TextAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hideWords, setHideWords] = useState(false);
  const [showBox, setShowBox] = useState(false);

  useEffect(() => {
    if (currentIndex < words.length) {
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      const hideTimer = setTimeout(() => {
        setHideWords(true);
      }, 1000); // Tiempo adicional antes de ocultar las palabras

      return () => clearTimeout(hideTimer);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (hideWords) {
      const showBoxTimer = setTimeout(() => {
        setShowBox(true);
      }, 500); // Tiempo adicional antes de mostrar el recuadro

      return () => clearTimeout(showBoxTimer);
    }
  }, [hideWords]);

  const wordVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const boxVariants = {
    hidden: { width: "100%" },
    visible: { width: 0 }, // Reduce el ancho a 0 para revelar el texto
  };

  return (
    <div className="text-animation-container fixed inset-0 flex h-screen flex-col items-center justify-center z-50 bg-black">
      <div className="flex space-x-4">
        <AnimatePresence>
          {!hideWords &&
            words.map((word, index) => (
              <motion.div
                key={word}
                className="text-2xl md:text-6xl font-bold text-white"
                variants={wordVariants}
                initial="hidden"
                animate={currentIndex > index ? "visible" : "hidden"}
                exit="exit"
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              >
                {word}
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
      {showBox && (
        <div className="relative w-80 h-16 mt-8 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              className="text-white text-lg md:text-3xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              gpeconsultores.com.mx
            </motion.span>
          </div>
          <motion.div
            className="absolute inset-0 bg-orange-600 origin-right"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </div>
      )}
    </div>
  );
};

export default TextAnimation;
