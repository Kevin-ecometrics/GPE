function Header() {
  const list = ["Services", "Team", "Reviews", "Contact"];

  return (
    <nav className="shadow-2xl shadow-gray-600 ">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 h-[160px]">
        <img src="" alt="LOGO" />
        <ul className="md:flex hidden">
          {list.map((item) => (
            <p
              key={item}
              className="mx-4 hover:text-white uppercase cursor-pointer"
            >
              {item}
            </p>
          ))}
        </ul>
        <div className="flex gap-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
            <path d="M3 7l9 6l9 -6" />
          </svg>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>{" "}
        </div>
      </div>
    </nav>
  );
}

export default Header;
