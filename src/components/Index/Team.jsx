import Observer from "@components/Animation/Observer";
import TeamMembers from "@components/Index/TeamMembers";

function Team() {
  return (
    <div className="scroll-mt-24" id="team">
      <div className="mx-auto container mb-8">
        <Observer>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="text-4xl px-8 md:px-0 md:text-6xl uppercase">
              Conoce al <span className="text-[#F29829]">equipo</span>
            </h1>

            <a href="/team" className="px-8 py-4 md:px-0 md:py-0">
              <button className="bg-[#F29829] hover:contrast-75 text-white px-4 py-2 rounded-md">
                Ver más
              </button>
            </a>
          </div>
        </Observer>
      </div>
      <TeamMembers />
    </div>
  );
}

export default Team;
