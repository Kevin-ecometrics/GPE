import { motion } from "framer-motion";

function Hero() {
  const text = "Mira nuestro equipo de GPE";

  const team = [
    { src: "/team2.webp", name: "Raul Garcia", job: "Derecho Corporativo" },
    { src: "/team1.webp", name: "Berenice Espinoza", job: "Derecho Laboral" },
    { src: "/team3.webp", name: "Isidro Garcia", job: "Contaduría" },
    { src: "/team4.webp", name: "Adrian Perez", job: "Contaduría" },
    { src: "/team5.webp", name: "", job: "Contaduría" },
    { src: "/team6.webp", name: "", job: "Contaduría" },
    { src: "/team7.webp", name: "", job: "Contaduría" },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-32 uppercase">
      <div className="flex mb-16">
        <a href="/home">
          <p className=" hover:text-white cursor-pointer">Inicio /</p>
        </a>{" "}
        &nbsp;
        <p>
          <span className="text-[#F29829] cursor-pointer">Equipo</span>
        </p>
      </div>

      <h1 className="uppercase text-4xl md:text-7xl px-8 mb-16">
        {text.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block mx-1">
            {word === "equipo" ? (
              <span className="text-[#F29829]">{word}</span>
            ) : (
              word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  whileHover={{ scale: 1.3 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))
            )}
            {wordIndex < text.split(" ").length - 1 && <span>&nbsp;</span>}
          </span>
        ))}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div key={index} className="relative group">
            <img src={member.src} alt={member.name} className="w-full h-auto" />
            <motion.div
              className="absolute inset-0 flex flex-col justify-center items-center bg-[#F29829] bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-white text-xl font-bold">{member.name}</p>
              <p className="text-white font-bold text-lg">{member.job}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
