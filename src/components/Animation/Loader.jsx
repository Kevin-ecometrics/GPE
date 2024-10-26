import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["EDIFICANDO", "NEGOCIOS", ""];

const TextAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBackground, setShowBackground] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (currentIndex < words.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      const backgroundTimer = setTimeout(() => {
        setShowBackground(true);
      }, 1000);

      return () => clearTimeout(backgroundTimer);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (showBackground) {
      const textTimer = setTimeout(() => {
        setShowText(true);
      }, 2000);

      return () => clearTimeout(textTimer);
    }
  }, [showBackground]);

  return (
    <div className="text-animation-container fixed inset-0 flex flex-col items-center justify-center z-50">
      <div className="flex space-x-4">
        <AnimatePresence mode="popLayout">
          {currentIndex < words.length - 1 &&
            words.slice(0, 2).map((word, index) => (
              <motion.div
                key={word}
                className="text-2xl md:text-6xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: currentIndex >= index ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                {word}
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
      {showBackground && (
        <motion.div
          className="w-72 h-16 bg-orange-500 origin-right"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: 1 }}
          onAnimationComplete={() => setShowText(true)}
        />
      )}
      {showText && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-3xl md:text-6xl font-bold">
            gpeconsultores.com.mx
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default TextAnimation;
