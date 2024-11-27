import Observer from "@components/Animation/Observer";
// import TeamMembers from "@components/Index/TeamMembers";

function Team() {
  return (
    <div className="scroll-mt-52" id="team">
      <div className="mx-auto container mb-8">
        <Observer>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-2">
            <h1 className="text-5xl px-8 md:px-0 md:text-6xl uppercase">
              Conoce al <span className="text-[#F29829]">equipo</span>
            </h1>

            <div className="flex gap-4 group items-center">
              {/* <a
                href="/team"
                className="relative inline-block px-8 mt-8 md:mt-0 md:px-0 text-black"
              >
                <Observer>
                  <p className="text-xl after:content-[''] after:block after:w-full after:h-[2px] after:bg-[#F29829] hover:text-white after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                    Ver más
                  </p>
                </Observer>
              </a> */}
              {/* <a href="/team" target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-4 transition-transform duration-300 ease-in-out"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l14 0" />
                  <path d="M15 16l4 -4" />
                  <path d="M15 8l4 4" />
                </svg>
              </a> */}
            </div>
          </div>
        </Observer>
      </div>
      {/* <TeamMembers /> */}
      <img src="/Team.webp" alt="" />
    </div>
  );
}

export default Team;
