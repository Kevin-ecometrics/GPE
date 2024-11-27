import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const polygonsWhite = [
  "328.39 175.55 321.59 381.94 187.54 484.05 232.54 257.19 328.39 175.55",
  "501.27 33.68 500.93 250.15 332.35 378.59 339.12 171.81 501.27 33.68",
  "321.43 393.23 309.76 747.08 309.76 747.09 106.11 900.97 186.38 496.25 321.43 393.23",
  "500.92 261.14 500.39 607.85 320.59 743.71 332.18 389.86 500.92 261.14",
  "309.6 758.46 304.49 913.74 104.75 914.11 105.01 912.85 309.6 758.46",
  "500.38 619.28 499.93 913.39 315.22 913.72 320.42 755.09 500.38 619.28",
];

const polygonsOrange = [
  "679.94 369.51 513.51 251.55 512.63 33.68 676.73 168.39 679.94 369.51",
  "834.37 474.45 689.9 372.05 686.61 171.29 791.27 257.19 834.37 474.45",
  "685.67 734.7 514.92 610.25 513.53 262.44 680.02 380.58 685.67 734.7",
  "917.29 898.89 695.78 737.43 689.98 383.12 835.47 486.35 917.29 898.89",
  "688.43 913.71 516.12 913.39 514.96 621.57 685.75 745.97 688.43 913.71",
  "919.05 914.11 698.58 913.71 695.87 748.7 918.38 910.78 919.05 914.11",
];

const combinedPolygons = polygonsWhite
  .map((points, idx) => ({
    points,
    className: "cls-1",
    index: idx,
  }))
  .concat(
    polygonsOrange.map((points, idx) => ({
      points,
      className: "cls-2",
      index: idx + polygonsWhite.length,
    }))
  )
  .sort((a, b) => a.index - b.index);

const SvgComponent = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center " ref={ref}>
      <motion.svg
        id="Copia"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 990 990"
        className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[500px]"
      >
        <defs>
          <style>
            {`
              .cls-1 { fill: #fff; }
              .cls-2 { fill: #ef9e27; }
            `}
          </style>
        </defs>
        {combinedPolygons.map((polygon, index) => (
          <motion.polygon
            key={index}
            className={polygon.className}
            points={polygon.points}
            initial={{
              opacity: 0,
              rotateX: -90,
              rotateY: -90,
              rotateZ: -90,
              scale: 0.5,
              skewX: 10,
              skewY: 10,
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    rotateX: 0,
                    rotateY: 0,
                    rotateZ: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0,
                  }
                : {
                    opacity: 0,
                    rotateX: -90,
                    rotateY: -90,
                    rotateZ: -90,
                    scale: 0.5,
                    skewX: 10,
                    skewY: 10,
                  }
            }
            transition={{
              delay: index * 0.3,
              duration: 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.svg>
    </div>
  );
};

export default SvgComponent;
