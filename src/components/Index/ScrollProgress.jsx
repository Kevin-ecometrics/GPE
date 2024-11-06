import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollProgress = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollY(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "5px",
        height: `${scrollY}%`,
        backgroundColor: "#F29829",
        zIndex: 99,
      }}
      initial={{ height: 0 }}
      animate={{ height: `${scrollY}%` }}
      transition={{ ease: "easeOut", duration: 0.2 }}
    />
  );
};

export default ScrollProgress;
