import { motion } from "framer-motion";

const data = [
  {
    imgSrc: "/1.webp",
    title: "Logística corporativa",
    description:
      "Our team consists of experienced professionals who work with passion, delivering high-quality projects.",
  },
  {
    imgSrc: "/2.webp",
    title: "Administración de nómina",
    description:
      "We offer unique and creative approaches that help your business stand out in the market and achieve success.",
  },
  {
    imgSrc: "/3.webp",
    title: "Asesoría contable",
    description:
      "We prioritize client needs, deeply understanding them to create tailored solutions for maximum results.",
  },
  {
    imgSrc: "/4.webp",
    title: "Asesoría laboral individual",
    description:
      "Our team consists of experienced professionals who work with passion, delivering high-quality projects.",
  },
];

function Client() {
  return (
    <div className="flex md:flex-row flex-col justify-between items-center md:w-[80%] mx-auto md:mb-24">
      {data.map((item, index) => (
        <motion.div
          key={index}
          className="text-center md:w-64 md:mb-0 mb-8 md:h-52"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <motion.div
            variants={{
              rest: { opacity: 1 },
              hover: { opacity: 0.7 },
            }}
            className="relative hover:text-[#CD512F]"
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              className="mx-auto mb-8"
            />
            <h3 className="text-[24px]  mb-4 mt-2 ">{item.title}</h3>
          </motion.div>
          <motion.p
            variants={{
              rest: { opacity: 0, y: 10 },
              hover: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3 }}
            className="text-[16px] px-4  mt-1"
          >
            {item.description}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
}

export default Client;
