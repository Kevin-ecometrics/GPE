import Observer from "@components/Animation/Observer";

function TeamMembers() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-8 gap-8">
      {["/team1.jpg", "/team2.jpg", "/team3.jpg", "/team4.jpg"].map(
        (src, index) => (
          <div key={index}>
            <div>
              <Observer>
                <img src={src} alt="" className="w-full" />
              </Observer>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default TeamMembers;
