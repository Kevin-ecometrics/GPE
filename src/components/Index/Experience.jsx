/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Tower from "@components/Index/Tower";
function Experience() {
  const yearExperience = [
    { number: 6, text: "Años de experiencia" },
    { number: 50, text: "Proyectos completados" },
    { number: 20, text: "Clientes satisfechos" },
  ];

  const refs = useRef(yearExperience.map(() => React.createRef()));
  const [inView, setInView] = useState(yearExperience.map(() => false));
  const controls = useAnimation();

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setInView((prev) => {
              const newInView = [...prev];
              newInView[index] = entry.isIntersecting;
              return newInView;
            });
          });
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (refs.current[index].current) {
          observer.unobserve(refs.current[index].current);
        }
      });
    };
  }, []);

  useEffect(() => {
    inView.forEach((visible) => {
      if (visible) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        });
      }
    });
  }, [inView, controls]);

  const Counter = ({ from, to }) => {
    const [count, setCount] = useState(from);

    useEffect(() => {
      if (inView) {
        const controls = setInterval(() => {
          setCount((prev) => {
            if (prev < to) {
              return prev + 1;
            } else {
              clearInterval(controls);
              return to;
            }
          });
        }, 50);
      }
    }, [inView, to]);

    return (
      <span
        style={{
          maskImage: "linear-gradient(to bottom, black 65%, transparent 20%)",
        }}
      >
        {count}
      </span>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center py-28 md:w-[80%] mx-auto">
      <div>
        {yearExperience.map((item, index) => (
          <motion.div
            ref={refs.current[index]}
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={
              inView[index] ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-[70px] uppercase mb-2 mt-2 text-[#D2D2D0] group-hover:text-[#F29829]">
              <Counter from={0} to={item.number} />
              <span className="text-[#F29829]">+</span>
            </h3>
            <h4 className="text-[34px] uppercase">{item.text}</h4>
          </motion.div>
        ))}
      </div>
      <Tower />
    </div>
  );
}

export default Experience;
