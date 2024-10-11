function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      image: "https://miller.bslthemes.com/pixy-demo/img/blog/9.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi. Duis eget justo auctor, ornare nunc in, ultrices odio. Nullam non nisi nec purus ultricies lacinia. Duis eget justo auctor, ornare nunc in, ultrices odio. Nullam non nisi nec purus ultricies lacinia.",
      date: "2021-10-10",
      theme: "laboral",
    },
    {
      id: 2,
      title: "Blog 2",
      image: "https://miller.bslthemes.com/pixy-demo/img/blog/9.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi. Duis eget justo auctor, ornare nunc in, ultrices odio. Nullam non nisi nec purus ultricies lacinia. Duis eget justo auctor, ornare nunc in, ultrices odio. Nullam non nisi nec purus ultricies lacinia.",
      date: "2021.10.10",
      theme: "fiscal",
    },
    {
      id: 3,
      title: "Blog 3",
      image: "https://miller.bslthemes.com/pixy-demo/img/blog/9.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi. Duis eget justo auctor, ornare nunc in, ultrices odio. Nullam non nisi nec purus ultricies lacinia. Duis eget justo auctor, ornare nunc in, ultrices odio. Nullam non nisi nec purus ultricies lacinia.",
      date: "2021.10.10",
      theme: "fiscal",
    },
  ];
  return (
    <div>
      <div className="md:container mx-auto px-8 md:px-0">
        <p className="uppercase text-xl mb-8">Newsletter</p>
        <div className="flex justify-between items-start md:items-end mb-8 md:flex-row flex-col">
          <h1 className="text-5xl uppercase">
            GACETA GPE Lo más nuevo en materia{" "}
            <span className="text-[#CD512F]">fiscal</span> y{" "}
            <span className="text-[#CD512F]">laboral</span>
          </h1>
          <div className="flex gap-2 group py-4 md:py-0">
            <a href="/blogs">
              <p className="uppercase group relative inline-block">
                Mira todos nuestras publicaciones
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </p>{" "}
            </a>
            <a href="/blogs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="group-hover:translate-x-4 transition-transform duration-300 ease-in-out"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M13 18l6 -6" />
                <path d="M13 6l6 6" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex gap-16 overflow-x-hidden flex-col md:flex-row">
          {blogs.slice(0, 2).map((blog, index) => (
            <div className="md:w-[50%] relative group" key={index}>
              <img
                src={blog.image}
                alt="blog"
                className="w-full h-[400px] object-cover
                hover:scale-105 transition-transform duration-300 
                "
              />
              <div className="py-8 flex justify-between flex-col md:flex-row items-start gap-8">
                <div className="flex-col">
                  <h1 className="text-3xl uppercase mb-4">{blog.title}</h1>
                  <p>{blog.description}</p>
                </div>
                <div className="md:w-96 w-full h-32 bg-gray-900 group-hover:bg-[#CD512F]">
                  <div className="flex justify-end items-center px-2 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                      className="group-hover:rotate-45 transition-transform duration-300 ease-in-out cursor-pointer"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M17 7l-10 10" />
                      <path d="M8 7l9 0l0 9" />
                    </svg>
                  </div>

                  <p className="flex justify-center items-center uppercase text-white">
                    leer más
                  </p>
                </div>

                <div className=" top-5 right-6 absolute bg-black px-4 py-2 rounded-full">
                  <p className="text-white uppercase font-medium">
                    {blog.date}
                  </p>{" "}
                </div>
                <div className=" top-5 left-6 absolute bg-white  px-4 py-2 rounded-full">
                  <p className="text-black uppercase font-medium">
                    {blog.theme}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
