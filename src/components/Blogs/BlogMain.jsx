// import Recent from "@components/Blogs/RecentBlogs";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import FormBlog from "./FormBlog";
import Reviews from "./Review";

function BlogMain() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Prima de Riesgo IMSS 2025: Preséntala a Tiempo y Evita Sanciones",
    description:
      "Tienes hasta el 28 de febrero para presentar tu prima si eres Patrón. En GPE te explicamos brevemente todo lo que requieres.",
    author: {
      "@type": "Person",
      name: "GPE Consultores",
    },
    datePublished: "2025-02-20",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://gpeconsultores.com.mx/blogs/blog-1",
    },
  };
  const navigate = useNavigate();
  const id = window.location.pathname.split("/")[2];
  const paths = [
    {
      id: "1",
      tema: "Blog 1",
      url: "/blogs/prima-riesgo-imss-2025-presentala-tiempo-evita-sanciones",
    },
    {
      id: "2",
      tema: "Blog 2",
      url: "/blogs/blog-2",
    },
    {
      id: "3",
      tema: "Blog 3",
      url: "/blogs/blog-3",
    },
  ];

  const blog = paths.find((item) => item.url === `/blogs/${id}`);

  const imagesRef = useRef([]);

  useEffect(() => {
    if (!blog) {
      navigate("/blogs");
    }
  }, [blog, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      imagesRef.current.forEach((img) => {
        if (!img || img.classList.contains("no-animate")) return;

        const rect = img.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // La imagen se muestra completa al inicio
        if (!img.dataset.initialized) {
          img.style.transform = "scale(1)";
          img.dataset.initialized = true;
        }

        // Calcula qué tan dentro está en la pantalla
        const visiblePercentage = Math.max(
          0,
          Math.min(1, (windowHeight - rect.top) / windowHeight)
        );

        const scaleValue = 1 + visiblePercentage * 0.1;
        img.style.transform = `scale(${scaleValue})`;
        img.style.transition = "transform 0.5s ease-out";
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ejecuta la función al cargar

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!blog) return null;
  return (
    <div>
      <Helmet>
        <title>
          Prima de Riesgo IMSS 2025: Preséntala a Tiempo y Evita Sanciones{" "}
        </title>
        <script type="application/ld+json">{JSON.stringify(jsonLdData)}</script>
      </Helmet>
      <div className="container mx-auto px-8 py-32 md:py-32">
        <a href="/home">
          <p className=" hover:text-white uppercase text-center mb-12">
            Inicio &nbsp; / &nbsp;{" "}
            <span className="text-[#F29829]">publicación </span>
          </p>
        </a>

        <h1 className="text-center text-3xl md:text-5xl uppercase mb-16">
          Prima de Riesgo IMSS 2025: Preséntala a Tiempo y Evita Sanciones
        </h1>

        <div className="flex justify-center items-center flex-col">
          <div className="overflow-hidden w-full max-w-4xl ">
            <img
              ref={(el) => imagesRef.current.push(el)}
              src="/Blog1-Hero.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-[60%]">
            <p className="py-8 text-white mb-8 text-4xl">
              ¿Por qué es importante presentar la Prima de Riesgo este Febrero
              2025?
            </p>
            <p className="text-xl">
              De acuerdo con la Ley del Seguro Social, la Prima de Riesgo 2025
              debe presentarse durante el mes de febrero.
              <br /> <br />
              La prima de riesgo es la cuota que los patrones están obligados a
              pagar para proteger a sus colaboradores en caso de accidentes o
              enfermedades laborales. Su cálculo se basa en el porcentaje
              correspondiente a la clase y fracción establecidas en el
              Reglamento de la Ley del Seguro Social (Artículo 196), según la
              actividad que realice el trabajador.
              <br /> <br />
              La prima media es el porcentaje con el cual las empresas
              determinarán el pago de las cuotas del Seguro de Riesgos de
              Trabajo. Este porcentaje se asigna cuando la empresa se inscribe
              por primera vez ante el IMSS o cuando cambia de actividad, de
              acuerdo con la clasificación del riesgo de la empresa.
            </p>
            <p className="py-8 text-white mb-8 text-4xl">
              Clasificación del Riesgo Laboral
            </p>
            <p className="text-xl">
              Las empresas y actividades económicas se agrupan en cinco clases,
              dependiendo del nivel de riesgo asociado a sus actividades:
              <br /> <br />
              <strong className="text-white">Clase I </strong> – Riesgo mínimo:
              Oficinas administrativas, servicios educativos, consultorías y
              asesorías.
              <br /> <br />
              <strong className="text-white">Clase II </strong> – Riesgo bajo:
              Restaurantes, consultas médicas, comercio minorista.
              <br /> <br />
              <strong className="text-white">Clase III </strong> – Riesgo medio:
              Trabajos con herramientas o maquinaria, manufactura ligera.
              <br /> <br />
              <strong className="text-white">Clase IV </strong> – Riesgo alto:
              Industria minera, construcción, fabricación de productos químicos.
              <br /> <br />
              <strong className="text-white">Clase V </strong> – Riesgo máximo:
              Trabajo en plataformas petroleras, minería subterránea, manejo de
              sustancias tóxicas.
            </p>
          </div>
          <div className="flex gap-4 justify-center items-center md:w-[70%] py-16 md:flex-row flex-col">
            <div className="overflow-hidden">
              <img
                ref={(el) => imagesRef.current.push(el)}
                src="/Blog1-1.webp"
                alt=""
              />
            </div>
            <div className="overflow-hidden ">
              <img
                ref={(el) => imagesRef.current.push(el)}
                src="/Blog1-2.webp"
                alt=""
              />
            </div>
          </div>
          <div className="md:w-[60%]">
            <p className="py-8 text-white text-4xl">
              Beneficios de la Prima de Riesgo
            </p>
            <ul className="list-decimal text-xl space-y-4 px-6">
              <li>
                Reducción de riesgos y accidentes mediante la implementación de
                medidas de seguridad y capacitaciones.
              </li>
              <li>Fomento de la cultura de seguridad dentro de la empresa.</li>
              <li>
                Monitoreo y control de accidentes, registro de incidencias y
                gestión de propuestas para mejorar la seguridad laboral.
              </li>
              <li>Optimización de costos.</li>
              <li>
                Cumplimiento normativo: Evita sanciones y problemas legales con
                el IMSS.
              </li>
            </ul>
            <p className="py-8 text-white text-4xl">
              ¿Cómo se Calcula la Prima de Riesgo?{" "}
            </p>
            <p className="text-2xl mb-8">
              Para determinar la prima de riesgo, se deben considerar los
              siguientes factores:
            </p>
            <ul className="list-decimal text-xl space-y-4 px-6">
              <li>Número de trabajadores asegurados. </li>
              <li>
                Accidentes laborales e incapacidades ocurridas entre el 1° de
                marzo de 2024 y el 28 de febrero de 2025.{" "}
              </li>
              <li>Días subsidiados por incapacidad temporal. </li>
              <li>
                Casos de incapacidad permanente o fallecimiento derivados de
                accidentes o enfermedades de trabajo.{" "}
              </li>
              <li>
                Información registrada en los certificados de incapacidad.{" "}
              </li>
            </ul>
            <p className="text-2xl mb-8 mt-8">
              Después de recopilar estos datos, es necesario ingresarlos en el
              Sistema Único de Autodeterminación (SUA), disponible en el portal
              del IMSS.
            </p>
            <p className="py-8 text-white text-4xl">
              ¿Quiénes Están Obligados a Presentarla?{" "}
            </p>
            <p className="text-2xl mb-8 mt-8">
              Deben presentar la declaración de la Prima de Riesgo los patrones
              que cumplan con alguno de los siguientes criterios:
            </p>
            <ul className="list-decimal text-xl space-y-4 px-6">
              <li>
                Cuando la prima calculada sea diferente a la del año anterior.{" "}
              </li>
              <li>
                Si han cumplido un año de haberse inscrito o cambiado de
                actividad económica.{" "}
              </li>
              <li>
                En caso de haber registrado accidentes o enfermedades laborales
                durante el periodo de cálculo.{" "}
              </li>
            </ul>
            <p className="py-8 text-white text-4xl">
              ¿Quiénes Están Exentos de Presentarla?{" "}
            </p>
            <ul className="list-decimal text-xl space-y-4 px-6">
              <li>No están obligados a presentar la determinación: </li>
              <li>
                Patrones con menos de 10 trabajadores, quienes pueden optar por
                conservar la prima media.{" "}
              </li>
              <li>
                Empresas que suspendieron actividades por más de seis meses y
                reportaron su baja patronal.{" "}
              </li>
              <li>
                Nuevas empresas que no hayan completado un año de operaciones al
                31 de diciembre de 2024.{" "}
              </li>
              <li>
                Aquellos cuya prima de riesgo permanezca igual a la del
                ejercicio anterior.{" "}
              </li>
            </ul>

            <p className="py-8 text-white text-4xl">
              ¿Dónde se Presenta la Prima de Riesgo?{" "}
            </p>
            <p className="mb-8 text-2xl">
              La presentación puede realizarse de dos formas:
            </p>
            <ul className="list-decimal text-xl space-y-4 px-6">
              <li>
                En línea, y presencialmente en la subdelegación correspondiente
                del IMSS.{" "}
              </li>
            </ul>
            <p className="py-8 text-white text-4xl">
              Errores comunes al presentarla{" "}
            </p>
            <ul className="list-decimal text-xl space-y-4 px-6">
              <li>Entregas extemporáneas </li>
              <li>Falta de actualizador en el SUA </li>
              <li>Errores en el cálculo </li>
              <li>
                Falta de reportes de seguimiento para identificar apropiadamente
                los tipos de accidentes.{" "}
              </li>
            </ul>
            <p className="py-8 text-white text-4xl">Sanciones y Multas </p>
            <p className="mb-8 text-xl">
              La omisión o presentación incorrecta de esta declaración puede
              derivar en multas que van desde 20 hasta 210 veces el UMA, lo que
              equivale a una sanción aproximada de entre $2,171 y $22,806 pesos.{" "}
            </p>
            <p className="py-8 text-white text-4xl">
              ¿Requieres asesoría para determinar tu prima de riesgo?{" "}
            </p>
            <p className="mb-8 text-xl">
              Te apoyamos en la gestión y presentación de la declaración ante el
              IMSS, estrategias para la reducción de riesgos y optimización de
              costos.
              <br />
              Nuestro grupo de expertos te podrá apoyar a agilizar este
              procedimiento para que tu empresa y negocio estén al margen y
              encaminen al éxito y crecimiento profesional{" "}
            </p>
          </div>
        </div>
        <Reviews URL={blog.id} />
        <FormBlog URL={blog.id} />
        {/* <h1 className="uppercase text-5xl py-16">
          Blogs <span className="text-[#F29829] font-bold">similares</span>{" "}
        </h1>
        <div className="flex gap-8">
          {Recent.map(({ image, title, description, theme, date, id }) => (
            <div key={id} className="group cursor-pointer relative">
              <a href="/">
                <img
                  className="no-animate transition-transform duration-300 ease-in-out transform"
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
                  <div className="h-32 w-64 p-4 flex justify-center items-center bg-gray-900  group-hover:bg-[#F29829]">
                    <h3 className="uppercase">Saber más</h3>
                  </div>{" "}
                </div>
              </a>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default BlogMain;
