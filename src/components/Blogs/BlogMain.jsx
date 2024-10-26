import Recent from "@components/Blogs/RecentBlogs";

function BlogMain() {
  const id = window.location.pathname.split("/")[2];
  const tema = id.replace(/-/g, " ");
  return (
    <div>
      <div className="container mx-auto px-8 md:py-48">
        <a href="/blogs">
          <p className=" hover:text-white uppercase text-center mb-12">
            Inicio &nbsp; / &nbsp;{" "}
            <span className="text-[#CD512F]">publicación </span>
          </p>
        </a>

        <h2 className="text-8xl text-center mb-8">{tema}</h2>
        <div className="flex justify-center items-center flex-col">
          <img
            src="https://miller.bslthemes.com/pixy-demo/img/blog/14.jpg"
            alt=""
            className="mb-16"
          />

          <div className="md:w-[60%]">
            <p className="py-8 text-white mb-8 text-2xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus laudantium esse dolorem sapiente tempore similique
              dignissimos, earum numquam assumenda, voluptates, iure cupiditate?
              Unde vel culpa ex nesciunt, facere officia eveniet!
            </p>
            <p className="text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              quam quaerat nam totam ratione quia sit eos nulla, porro itaque
              excepturi, suscipit rem voluptatibus dolorem veritatis possimus
              non magnam aliquid doloribus. Accusantium omnis sequi adipisci?
            </p>
          </div>
          <div className="flex gap-4 justify-center items-center md:w-[30%] py-16">
            <img
              src="https://miller.bslthemes.com/pixy-demo/img/blog/9.jpg"
              alt=""
            />
            <img
              src="https://miller.bslthemes.com/pixy-demo/img/blog/11.jpg"
              alt=""
            />
          </div>
          <div className="md:w-[60%]">
            <p className="py-8 mb-8 text-2xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus laudantium esse dolorem sapiente tempore similique
              dignissimos, earum numquam assumenda, voluptates, iure cupiditate?
              Unde vel culpa ex nesciunt, facere officia eveniet!
            </p>
            <p className="text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              quam quaerat nam totam ratione quia sit eos nulla, porro itaque
              excepturi, suscipit rem voluptatibus dolorem veritatis possimus
              non magnam aliquid doloribus. Accusantium omnis sequi adipisci?
            </p>
            <h1 className="text-2xl uppercase py-8">Conclusion</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              necessitatibus soluta ut consequuntur sit voluptate non at
              delectus ipsam ipsum mollitia saepe exercitationem illo,
              architecto fuga fugit molestiae, deserunt quasi ex magni. Mollitia
              soluta, cupiditate vero quaerat alias neque cum!
            </p>
          </div>
        </div>
        <h1 className="uppercase text-5xl py-16">
          Blogs <span className="text-[#CD512F] font-bold">similares</span>{" "}
        </h1>
        <div className="flex gap-8">
          {Recent.map(({ image, title, description, theme, date, id }) => (
            <div key={id} className="group cursor-pointer relative">
              <a href="/">
                <img
                  className="transition-transform duration-300 ease-in-out transform"
                  src={image}
                  alt={title}
                />
                <div className="flex flex-col md:flex-row gap-8 py-4 ">
                  {" "}
                  <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p className="absolute top-4 left-4 p-4 bg-black text-white rounded-full">
                      {theme}
                    </p>
                    <p className="absolute top-4 right-4 p-4 bg-black text-white rounded-full">
                      {date}
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
      </div>
    </div>
  );
}

export default BlogMain;
