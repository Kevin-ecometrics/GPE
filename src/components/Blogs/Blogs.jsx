import List from "@components/Blogs/PopularBlogs";
import Recent from "@components/Blogs/RecentBlogs";
function BlogList() {
  return (
    <div className="container mx-auto px-8 md:py-48">
      <a href="/">
        {" "}
        <p className="uppercase text-center mb-12 hover:text-white">
          Inicio &nbsp; / &nbsp; <span className="text-[#CD512F]">Blog</span>
        </p>
      </a>

      <h2 className="text-8xl text-center">NEWSLETTER</h2>
      <h1 className="text-4xl uppercase py-8">
        Publicaciones
        <span className="text-[#CD512F] font-bold"> populares</span>
      </h1>
      <div className="flex md:flex-row flex-col items-center gap-4">
        {List.slice(0, 2).map((index, key) => (
          <div key={key} className="group cursor-pointer relative">
            <a href="/">
              <img
                className="transition-transform duration-300 ease-in-out transform"
                src={index.image}
                alt={index.title}
              />
              <div className="flex flex-col md:flex-row gap-8 py-4 ">
                {" "}
                <div>
                  <h2>{index.title}</h2>
                  <p>{index.description}</p>
                  <p className="absolute top-4 left-4 p-4 bg-black text-white rounded-full">
                    {index.theme}
                  </p>
                  <p className="absolute top-4 right-4 p-4 bg-black text-white rounded-full">
                    {index.date}
                  </p>
                </div>
                <div className="h-32 w-64 p-4 flex justify-center items-center bg-gray-900  group-hover:bg-[#CD512F]">
                  <h3 className="uppercase">Saber más</h3>
                </div>{" "}
              </div>
            </a>
          </div>
        ))}
      </div>
      <div>
        <h1 className="text-4xl  uppercase py-8">
          Todas las
          <span className="text-[#CD512F] font-bold"> publicaciones</span>
        </h1>
        <div className="flex flex-col gap-4">
          {Recent.map((index, key) => (
            <div
              key={key}
              className=" flex md:flex-row flex-col cursor-pointer"
            >
              <div className="relative">
                <img className="h-96 w-[1100px]" src={index.image} alt="" />
                <div className="flex gap-8">
                  <p className="absolute top-4 left-4 p-4 bg-black text-white rounded-full">
                    {index.theme}
                  </p>
                  <p className="absolute top-4 right-4 p-4 bg-black text-white rounded-full">
                    {index.date}
                  </p>
                </div>
              </div>
              <div className="py-12 px-8">
                <h2 className="text-5xl mb-8">{index.title}</h2>
                <p className="text-xl mb-8 md:w-[80%]">{index.description}</p>
                <button className="bg-[#CD512F] hover:opacity-80 rounded-full px-16 py-6">
                  <p className="text-white uppercase">Leer más</p>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogList;
