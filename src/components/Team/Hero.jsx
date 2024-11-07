import { motion } from "framer-motion";

function Hero() {
  const team = [
    { src: "/team2.webp", name: "John Doe", job: "Derecho Corporativo" },
    { src: "/team1.webp", name: "Jane Smith", job: "Derecho Laboral" },
    { src: "/team3.webp", name: "Alice Johnson", job: "Contaduría" },
    { src: "/team4.webp", name: "Bob Brown", job: "Contaduría" },
    { src: "/team5.webp", name: "Charlie Davis", job: "Recursos Humanos" },
    { src: "/team6.webp", name: "Diana Evans", job: "Marketing" },
    { src: "/team7.webp", name: "Frank Green", job: "Tecnología" },
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
        Mira nuestro equipo de GPE
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div key={index} className="relative group">
            <img src={member.src} alt={member.name} className="w-full h-auto" />
            <motion.div
              className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-white text-xl font-bold">{member.name}</p>
              <p className="text-orange-500 font-bold text-lg">{member.job}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
