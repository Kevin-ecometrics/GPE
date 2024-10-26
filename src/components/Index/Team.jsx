import Observer from "@components/Animation/Observer";
import TeamMembers from "@components/Index/TeamMembers";

function Team() {
  return (
    <div className="scroll-mt-24" id="team">
      <div className="mx-auto container mb-8">
        <Observer>
          <div className="flex justify-between items-center">
            <h1 className="text-6xl uppercase">
              Conoce al <span className="text-[#CD512F]">equipo</span> detrás de
              GPE Consultores
            </h1>

            <a href="/team">
              <button className="bg-[#CD512F] hover:contrast-75 text-white px-4 py-2 rounded-md">
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
