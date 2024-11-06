import Observer from "@components/Animation/Observer";

function TeamMembers() {
  const teamMembers = [
    { src: "/team2.webp", name: "John Doe", job: "Derecho Corporativo" },
    { src: "/team1.webp", name: "Jane Smith", job: "Derecho Laboral" },
    { src: "/team3.webp", name: "Alice Johnson", job: "Contaduría" },
    { src: "/team4.webp", name: "Bob Brown", job: "Contaduría" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-8 gap-8">
      {teamMembers.map((member, index) => (
        <div key={index} className="relative group">
          <div>
            <Observer>
              <img
                src={member.src}
                alt={member.name}
                title={member.name}
                className="w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#F29829] bg-opacity-20 opacity-0 flex-col group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white uppercase text-xl transform translate-y-96 group-hover:translate-y-32 transition-transform duration-500 mb-4">
                  {member.name}
                </p>
                <p className="text-[#F29829] font-bold text-xl transform translate-y-96 group-hover:translate-y-32 transition-transform duration-500 uppercase">
                  {member.job}
                </p>
              </div>
            </Observer>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeamMembers;
