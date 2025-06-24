// import Recent from "@components/Blogs/RecentBlogs";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import FormBlog from "./FormBlog";
import Reviews from "./Review";

function BlogMain() {
  const schemablog1 = {
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
      "@id":
        "https://gpeconsultores.com.mx/blogs/prima-riesgo-imss-2025-presentala-tiempo-evita-sanciones",
    },
  };

  const schemablog2 = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Registro del uso de Marca: ¿Cuándo y Cómo Declararlo?",
    description:
      "No pierdas tus derechos de marca y haz tu declaración por primera vez o ratifica al cumplir 3 años con tu registro. GPE consultores te asesora con tu trámite ante el IMPI.",
    author: {
      "@type": "Person",
      name: "GPE Consultores",
    },
    datePublished: "2025-03-06", // Puedes cambiar esta fecha según cuando se publique el blog
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://gpeconsultores.com.mx/blogs/registro-del-uso-de-marca-en-mexico", // Asegúrate de que esta URL sea la correcta
    },
  };

  const schemablog3 = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Documentos que tienes que tener si eres patrón o vas a emprender ",
    description:
      "Te damos la lista de responsabilidades y documentos que debes solicitar y entregar a tus empleados desde el día 1.  Te ayudamos somos expertos",
    author: {
      "@type": "Person",
      name: "GPE Consultores",
    },
    datePublished: "2025-04-04",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://gpeconsultores.com.mx/blogs/documentos-y-obligaciones-patronales",
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
      url: "/blogs/registro-del-uso-de-marca-en-mexico",
    },
    {
      id: "3",
      tema: "Blog 3",
      url: "/blogs/documentos-y-obligaciones-patronales",
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
      {blog ? (
        blog.url ===
        "/blogs/prima-riesgo-imss-2025-presentala-tiempo-evita-sanciones" ? (
          // Si la URL es "/blogs/prima-riesgo-imss-2025-presentala-tiempo-evita-sanciones"
          <div>
            <Helmet>
              <title>
                Prima de Riesgo IMSS 2025: Preséntala a Tiempo y Evita Sanciones{" "}
              </title>
              <script type="application/ld+json">
                {JSON.stringify(schemablog1)}
              </script>
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
                    ¿Por qué es importante presentar la Prima de Riesgo este
                    Febrero 2025?
                  </p>
                  <p className="text-xl">
                    De acuerdo con la Ley del Seguro Social, la Prima de Riesgo
                    2025 debe presentarse durante el mes de febrero.
                    <br /> <br />
                    La prima de riesgo es la cuota que los patrones están
                    obligados a pagar para proteger a sus colaboradores en caso
                    de accidentes o enfermedades laborales. Su cálculo se basa
                    en el porcentaje correspondiente a la clase y fracción
                    establecidas en el Reglamento de la Ley del Seguro Social
                    (Artículo 196), según la actividad que realice el
                    trabajador.
                    <br /> <br />
                    La prima media es el porcentaje con el cual las empresas
                    determinarán el pago de las cuotas del Seguro de Riesgos de
                    Trabajo. Este porcentaje se asigna cuando la empresa se
                    inscribe por primera vez ante el IMSS o cuando cambia de
                    actividad, de acuerdo con la clasificación del riesgo de la
                    empresa.
                  </p>
                  <p className="py-8 text-white mb-8 text-4xl">
                    Clasificación del Riesgo Laboral
                  </p>
                  <p className="text-xl">
                    Las empresas y actividades económicas se agrupan en cinco
                    clases, dependiendo del nivel de riesgo asociado a sus
                    actividades:
                    <br /> <br />
                    <strong className="text-white">Clase I </strong> – Riesgo
                    mínimo: Oficinas administrativas, servicios educativos,
                    consultorías y asesorías.
                    <br /> <br />
                    <strong className="text-white">Clase II </strong> – Riesgo
                    bajo: Restaurantes, consultas médicas, comercio minorista.
                    <br /> <br />
                    <strong className="text-white">Clase III </strong> – Riesgo
                    medio: Trabajos con herramientas o maquinaria, manufactura
                    ligera.
                    <br /> <br />
                    <strong className="text-white">Clase IV </strong> – Riesgo
                    alto: Industria minera, construcción, fabricación de
                    productos químicos.
                    <br /> <br />
                    <strong className="text-white">Clase V </strong> – Riesgo
                    máximo: Trabajo en plataformas petroleras, minería
                    subterránea, manejo de sustancias tóxicas.
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
                      Reducción de riesgos y accidentes mediante la
                      implementación de medidas de seguridad y capacitaciones.
                    </li>
                    <li>
                      Fomento de la cultura de seguridad dentro de la empresa.
                    </li>
                    <li>
                      Monitoreo y control de accidentes, registro de incidencias
                      y gestión de propuestas para mejorar la seguridad laboral.
                    </li>
                    <li>Optimización de costos.</li>
                    <li>
                      Cumplimiento normativo: Evita sanciones y problemas
                      legales con el IMSS.
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
                      Accidentes laborales e incapacidades ocurridas entre el 1°
                      de marzo de 2024 y el 28 de febrero de 2025.{" "}
                    </li>
                    <li>Días subsidiados por incapacidad temporal. </li>
                    <li>
                      Casos de incapacidad permanente o fallecimiento derivados
                      de accidentes o enfermedades de trabajo.{" "}
                    </li>
                    <li>
                      Información registrada en los certificados de incapacidad.{" "}
                    </li>
                  </ul>
                  <p className="text-2xl mb-8 mt-8">
                    Después de recopilar estos datos, es necesario ingresarlos
                    en el Sistema Único de Autodeterminación (SUA), disponible
                    en el portal del IMSS.
                  </p>
                  <p className="py-8 text-white text-4xl">
                    ¿Quiénes Están Obligados a Presentarla?{" "}
                  </p>
                  <p className="text-2xl mb-8 mt-8">
                    Deben presentar la declaración de la Prima de Riesgo los
                    patrones que cumplan con alguno de los siguientes criterios:
                  </p>
                  <ul className="list-decimal text-xl space-y-4 px-6">
                    <li>
                      Cuando la prima calculada sea diferente a la del año
                      anterior.{" "}
                    </li>
                    <li>
                      Si han cumplido un año de haberse inscrito o cambiado de
                      actividad económica.{" "}
                    </li>
                    <li>
                      En caso de haber registrado accidentes o enfermedades
                      laborales durante el periodo de cálculo.{" "}
                    </li>
                  </ul>
                  <p className="py-8 text-white text-4xl">
                    ¿Quiénes Están Exentos de Presentarla?{" "}
                  </p>
                  <ul className="list-decimal text-xl space-y-4 px-6">
                    <li>No están obligados a presentar la determinación: </li>
                    <li>
                      Patrones con menos de 10 trabajadores, quienes pueden
                      optar por conservar la prima media.{" "}
                    </li>
                    <li>
                      Empresas que suspendieron actividades por más de seis
                      meses y reportaron su baja patronal.{" "}
                    </li>
                    <li>
                      Nuevas empresas que no hayan completado un año de
                      operaciones al 31 de diciembre de 2024.{" "}
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
                      En línea, y presencialmente en la subdelegación
                      correspondiente del IMSS.{" "}
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
                      Falta de reportes de seguimiento para identificar
                      apropiadamente los tipos de accidentes.{" "}
                    </li>
                  </ul>
                  <p className="py-8 text-white text-4xl">
                    Sanciones y Multas{" "}
                  </p>
                  <p className="mb-8 text-xl">
                    La omisión o presentación incorrecta de esta declaración
                    puede derivar en multas que van desde 20 hasta 210 veces el
                    UMA, lo que equivale a una sanción aproximada de entre
                    $2,171 y $22,806 pesos.{" "}
                  </p>
                  <p className="py-8 text-white text-4xl">
                    ¿Requieres asesoría para determinar tu prima de riesgo?{" "}
                  </p>
                  <p className="mb-8 text-xl">
                    Te apoyamos en la gestión y presentación de la declaración
                    ante el IMSS, estrategias para la reducción de riesgos y
                    optimización de costos.
                    <br />
                    Nuestro grupo de expertos te podrá apoyar a agilizar este
                    procedimiento para que tu empresa y negocio estén al margen
                    y encaminen al éxito y crecimiento profesional{" "}
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
        ) : blog.url === "/blogs/registro-del-uso-de-marca-en-mexico" ? (
          <div>
            <Helmet>
              <title>
                Registro del uso de Marca: ¿Cuándo y Cómo Declararlo?{" "}
              </title>
              <script type="application/ld+json">
                {JSON.stringify(schemablog2)}
              </script>
            </Helmet>
            <div className="container mx-auto px-8 py-32 md:py-32">
              <a href="/home/">
                <p className=" hover:text-white uppercase text-center mb-12">
                  Inicio &nbsp; / &nbsp;{" "}
                  <span className="text-[#F29829]">publicación </span>
                </p>
              </a>

              <h1 className="text-center text-3xl md:text-5xl uppercase mb-16">
                Registro del uso de Marca: ¿Cuándo y Cómo Declararlo?{" "}
              </h1>

              <div className="flex justify-center items-center flex-col">
                <div className="overflow-hidden w-full max-w-4xl ">
                  <img
                    ref={(el) => imagesRef.current.push(el)}
                    src="/Blog2-Hero.webp"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="md:w-[60%]">
                  <p className="py-8 text-white mb-8 text-4xl">
                    Declaración del Uso de Marca: ¿Ya te toca?
                  </p>
                  <p className="text-xl">
                    Si registraste tu marca en 2022, debes declarar su uso en
                    2025. Al cumplir tres años debes renovarlo y cuentas con
                    tres meses para hacerlo. Te explicamos:
                    <br /> <br />
                    De acuerdo con la reforma del 5 de noviembre de 2020, se
                    establece la obligación de declarar el uso en marcas
                    registradas en el IMPI después del 10 de agosto de 2018.
                    <br /> <br />
                    Según el artículo 233 de la Ley Federal de Protección a la
                    Propiedad Industrial, el titular de una o varias marcas
                    deberá declarar su uso real y efectivo, indicando los
                    productos o servicios específicos, además de realizar el
                    pago de la tarifa correspondiente. Si no se renueva, se
                    pierden los derechos sobre la marca y el registro caducará
                    de pleno derecho, sin que se requiera una declaración por
                    parte del Instituto Mexicano de la Propiedad Industrial
                    (IMPI).
                  </p>
                  <p className="py-8 text-white mb-8 text-4xl">
                    Beneficios del Registro y Renovación de marca{" "}
                  </p>
                  <p className="text-xl">
                    Una marca registrada, más allá de un nombre o un logotipo,
                    es un signo que permite diferenciar los servicios, productos
                    e identidad de una empresa de otra. El registro de una marca
                    brinda al titular o titulares el derecho exclusivo sobre
                    esta.
                    <br /> <br />
                    En México, las marcas son protegidas por el IMPI, y el marco
                    jurídico aplicable está compuesto por la Ley Federal de
                    Protección a la Propiedad Industrial y el Reglamento de la
                    Ley de la Propiedad Industrial.
                    <br /> <br />
                    Proteger tu marca en México es imprescindible. Sin embargo,
                    además de los derechos que otorga tener una marca
                    registrada, también existen obligaciones.
                  </p>
                </div>
                <div className="flex gap-4 justify-center items-center md:w-[70%] py-16 md:flex-row flex-col">
                  <div className="overflow-hidden">
                    <img
                      ref={(el) => imagesRef.current.push(el)}
                      src="/blog2-1.webp"
                      alt=""
                    />
                  </div>
                  <div className="overflow-hidden ">
                    <img
                      ref={(el) => imagesRef.current.push(el)}
                      src="/blog2-2.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="md:w-[60%]">
                  <p className="py-8 text-white text-4xl">
                    ¿Quiénes pueden registrar una marca?{" "}
                  </p>
                  <p className="text-xl">
                    Pueden solicitar el registro de una marca tanto personas
                    físicas como personas morales. Puede ser una sola persona o
                    un grupo, en cuyo caso será necesario anexar un acuerdo
                    entre los solicitantes donde se establezcan las reglas de
                    uso, derechos, etc.
                  </p>
                  <p className="py-8 text-white text-4xl">
                    ¿Cuáles son los requisitos para registrar una marca?{" "}
                  </p>
                  <ul className="list-decimal text-xl space-y-4 px-6">
                    <li>
                      Tener el archivo de tu marca y estar registrado ante el
                      SAT{" "}
                    </li>
                    <li>
                      Llenar correctamente el formato de solicitud de registro
                      de marca.
                    </li>
                    <li>
                      Adjuntar los anexos requeridos en la solicitud de registro
                      de marca.{" "}
                    </li>
                    <li>
                      Realizar el pago de derechos por el registro de marca y
                      todo ante el portal del IMPI {""}
                      <a
                        href="https://www.gob.mx/tramites/ficha/solicitud-de-registro-de-marca-ante-el-impi/IMPI88"
                        target="_blank"
                        className="text-blue-400 hover:underline"
                      >
                        (URL:
                        https://www.gob.mx/tramites/ficha/solicitud-de-registro-de-marca-ante-el-impi/IMPI88)
                      </a>
                    </li>
                  </ul>

                  <p className="py-8 text-white text-4xl">
                    ¿Cómo puedo revisar si mi marca ya fue tomada?{" "}
                  </p>
                  <p className="text-2xl mb-8 mt-8">
                    Visita la herramienta electrónica de MARCia {""}
                    <a
                      href="https://marcia.impi.gob.mx/marcas/search"
                      target="_blank"
                      className="text-blue-400 hover:underline"
                    >
                      (https://marcia.impi.gob.mx/marcas/search) {""}
                    </a>
                    y arrastra tu logotipo o busca el nombre de tu marca para
                    encontrar con inteligencia artificial en el sistema del
                    Instituto Mexicano de la Propiedad Intelectual y así podrás
                    asegurarte de que la marca que quieres solicitar/verificar
                    no sea igual o parecida a otra en trámite o ya registrada
                    previamente.
                  </p>
                  <p className="py-8 text-white text-4xl">
                    ¿Cuánto tiempo tarda en aprobarse mi registro si es la
                    primera vez?{" "}
                  </p>
                  <p className="text-xl">
                    El proceso de aprobación toma aproximadamente de 4 a 6
                    meses.
                  </p>

                  <p className="py-8 text-white text-4xl">
                    ¿Cuánto tiempo dura mi registro de marca una vez aprobado?{" "}
                  </p>
                  <p className="mb-8 text-2xl">
                    El registro de marca tiene una duración de 10 años.{" "}
                  </p>

                  <p className="py-8 text-white text-4xl">
                    Tipos de Registro de Marca{" "}
                  </p>
                  <ul className="list-decimal text-xl space-y-4 px-6">
                    <li>
                      <strong className="text-white">Nominativa:</strong> Un
                      nombre o palabra para identificar el producto o servicio.
                    </li>
                    <li>
                      <strong className="text-white">Innominada:</strong> No
                      proporciona un nombre o denominación, pero evoca emociones
                      o la identificación de productos o servicios.
                    </li>
                    <li>
                      <strong className="text-white">Tridimensional:</strong> Se
                      refiere a la forma de un envase, un empaque o del producto
                      mismo.
                    </li>
                    <li>
                      <strong className="text-white">Mixta:</strong> Combinación
                      de elementos nominativos e innominados, identificable
                      fonética y gráficamente.
                    </li>
                    <li>
                      <strong className="text-white">Holográfica:</strong>{" "}
                      Imagen que cambia de color al moverse en diferentes
                      ángulos, utilizada para autentificar un producto.
                    </li>
                    <li>
                      <strong className="text-white">Sonora:</strong> Un
                      elemento auditivo que distingue productos y servicios en
                      el mercado (melodías, jingles, sonidos específicos).
                    </li>
                    <li>
                      <strong className="text-white">Imagen Comercial:</strong>{" "}
                      Combinación de colores, formas, etiquetas y empaques
                      organizados de tal manera que permiten identificar un
                      producto o servicio a través de su apariencia.
                    </li>
                  </ul>
                  <p className="py-8 text-white text-4xl">
                    ¿Qué tan caro es registrar una marca y porqué necesitaría
                    abogados de marcas?{" "}
                  </p>
                  <p className="mb-8 text-xl">
                    Presentar la solicitud de registro de marca en línea a
                    través del portal del IMPI tiene una tarifa de costo
                    aproximado para la presentación de 3 mil 126.46 pesos.
                    <br />
                    <br />
                    Sin embargo, muchas marcas requieren una asesoría y
                    consultoría de profesionales de marca para que el registro
                    finalice con éxito.
                    <br />
                    <br />
                    Esto ocurre cuando el proceso ante el IMPI, una vez
                    iniciado, te solicita un seguimiento y realizar
                    contestaciones a posibles objeciones en cuanto a tu
                    registro, además que sin asesoría, puede quedar limitada la
                    protección de tu marca sobre a los productos y servicios que
                    ofreces
                  </p>
                  <p className="py-8 text-white text-4xl">
                    ¿Por qué elegir a los consultores de GPE para tu registro y
                    renovación de marca?{" "}
                  </p>
                  <p className="mb-8 text-xl">
                    En GPE Consultores somos abogados de marcas y te acompañámos
                    en el registro de tu marca para proteger de usurpación y
                    competencia desleal.
                    <br /> <br />
                    Identificamos tu categoría y realizamos todo el trámite con
                    seguimiento ante el IMPI.
                    <br /> <br />
                    Con nuestra experiencia y profesionalismo aseguramos que se
                    realice la declaración de uso de marca en tiempo y forma
                    para que no pierdas derechos sobre tu marca.
                  </p>
                  <p className="text-2xl text-white">
                    No pierdas tus derechos de marca, te ayudamos a protegerla.
                    Nos encontramos en Tijuana, Baja California. Llama al:{" "}
                    <a
                      href="tel:+526631216201"
                      className="text-blue-400 hover:underline"
                    >
                      663 121 6201
                    </a>{" "}
                    o contáctanos
                    <a
                      href="/contact"
                      className="text-blue-400 hover:underline"
                    >
                      {" "}
                      aquí
                    </a>
                    .
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
        ) : blog.url === "/blogs/documentos-y-obligaciones-patronales" ? (
          <div>
            <Helmet>
              <title>
                Documentos que tienes que tener si eres patrón o vas a emprender
              </title>
              <script type="application/ld+json">
                {JSON.stringify(schemablog3)}
              </script>
            </Helmet>
            <div className="container mx-auto px-8 py-32 md:py-32">
              <a href="/home/">
                <p className=" hover:text-white uppercase text-center mb-12">
                  Inicio &nbsp; / &nbsp;{" "}
                  <span className="text-[#F29829]">publicación </span>
                </p>
              </a>

              <h1 className="text-center text-3xl md:text-5xl uppercase mb-16">
                Documentos que tienes que tener si eres patrón o vas a emprender
              </h1>

              <div className="flex justify-center items-center flex-col">
                <div className="overflow-hidden w-full max-w-4xl ">
                  <img
                    ref={(el) => imagesRef.current.push(el)}
                    src="/Blog3-Hero.webp"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="md:w-[60%]">
                  <p className="py-8 text-white mb-8 text-4xl">
                    Estos son los documentos clave que debes tener desde el día
                    1 si eres patrón o vas a emprender{" "}
                  </p>
                  <p className="text-xl">
                    Tener un negocio o empresa necesita de una buena dosis de
                    gestión y una administración impecable, pero de lo que no te
                    hablan es del recurso humano y la lista de
                    responsabilidades, que de acuerdo con el artículo 804 de la
                    Ley Federal de Trabajo, debes cumplir desde el día 1
                    <br /> <br />
                    ¿Por qué? para que tus empleados estén protegidos y de paso
                    proteger el patrimonio que estas construyendo.
                  </p>
                  <p className="py-8 text-white mb-8 text-4xl">
                    Te decimos los documentos clave que no te pueden faltar como
                    patrón o emprendedor.{" "}
                  </p>
                  <p className="text-2xl mb-4 text-white">
                    Como Patrón deberás conservar la siguiente documentación:
                  </p>
                  <ol className="list-decimal text-xl space-y-4 px-6">
                    <li>
                      Contratos individuales escritos (Que sean escritos
                      protegen ambas partes).
                    </li>
                    <li>
                      Nómina o recibidos de pagos de salarios (Evita confusiones
                      o problemas legales).
                    </li>
                    <li>
                      Controles de asistencia (Garantizan un seguimiento y
                      respaldo).
                    </li>
                    <li>
                      Comprobantes de pago de utilidades, vacaciones, aguinaldos
                      y primas (Son obligaciones que no pueden faltar).
                    </li>
                    <li>
                      Pagos, aportaciones y cuotas de seguridad social (Dan
                      legitimización y seguridad ante el IMSS e INFONAVIT).
                    </li>
                    <li>
                      Expedir constancias laborales cuando los trabajadores las
                      soliciten.
                    </li>
                    <li>
                      Contar con la documentación y permisos a la mano, así como
                      los reglamentos y capacitaciones para los colaboradores.
                    </li>
                    <li>Hacer las deducciones que soliciten los sindicatos.</li>
                  </ol>
                </div>
                <div className="flex gap-4 justify-center items-center md:w-[70%] py-16 md:flex-row flex-col">
                  <div className="overflow-hidden">
                    <img
                      ref={(el) => imagesRef.current.push(el)}
                      src="/blog3-1.webp"
                      alt=""
                    />
                  </div>
                  <div className="overflow-hidden ">
                    <img
                      ref={(el) => imagesRef.current.push(el)}
                      src="/blog3-2.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="md:w-[60%]">
                  <p className="py-8 text-white text-4xl">
                    ¿Cómo organizar todo esto?{" "}
                  </p>
                  <p className="text-xl mb-4">
                    La llave maestra de esto se llama: Expediente laboral que te
                    permite
                  </p>
                  <ol className="list-decimal text-xl space-y-4 px-6">
                    <li>Organizar </li>
                    <li>
                      Acceder de forma rápida (Desde un CURP hasta sus
                      vacaciones)
                    </li>
                    <li>Evitar multas y problemas legales.</li>
                    <li>
                      Este expediente debe conservarse durante la relación
                      laboral y hasta un año después de su conclusión.{" "}
                    </li>
                  </ol>
                  <p className="py-8 text-white text-4xl">
                    ¿Qué va dentro del expediente laboral?{" "}
                  </p>

                  <p className="text-2xl mb-4 text-white">Al inicio:</p>
                  <ol className="list-decimal text-xl space-y-4 px-6 mb-4">
                    <li>
                      Identificación oficial vigente con fotografía, CURP, RFC,
                      Número del Seguro Social.{" "}
                    </li>
                    <li>
                      Comprobante de domicilio,curriculum vitae, constancias de
                      estudio, cartas de recomendaciones o referencias
                      personales y constancia de no antecedentes penales.
                    </li>
                    <li>
                      Contrato individual de trabajo (en cualquiera de sus
                      modalidades).
                    </li>
                    <li>
                      Carta de recepción de material, herramientas o equipo.
                    </li>
                    <li>
                      Carta de recepción de reglamento interno de trabajo.
                    </li>
                  </ol>

                  <p className="text-2xl mb-4 text-white">
                    {" "}
                    Con el paso del tiempo deben agregarse los siguientes:
                  </p>

                  <ol className="list-decimal text-xl space-y-4 px-6 mb-4">
                    <li>Recibos de nómina, pagos de aguinaldo.</li>
                    <li>
                      Permisos, incapacidades, avisos de accidentes y actas
                      administrativas, avisos de accidentes o enfermedades (ST-7
                      o ST-9).
                    </li>
                    <li>Constancias de habilidades (DC-3).</li>
                    <li>Formatos de permisos generales o de horas extras. </li>
                    <li>Constancias médicas. </li>
                  </ol>

                  <p className="py-8 text-white text-4xl">
                    ¿Qué pasa si no cumplo con estos documentos y obligaciones?{" "}
                  </p>
                  <p className="text-xl mb-8 mt-8">
                    Puedes meterte en problemas complejos, desde multas desde 50
                    hasta 5,000 veces el valor de la UMA vigente, la clausura de
                    tu negocio o incluso cárcel.
                  </p>
                  <p className="py-8 text-xl">
                    Todo este listado de documentos son obligaciones y derechos
                    que se deben proporcionar para garantizar condiciones dignas
                    y justas a tus colaboradores, puede sonar abrumador, pero
                    cumplir con todo esto no solo te ahorra problemas serios si
                    no que te permite afianzar tu negocio hacia una certidumbre
                    jurídica.
                  </p>
                  <p className="text-xl">
                    Si aun tienes dudas sobre las normas y obligaciones que te
                    corresponden de acuerdo con el giro de tu empresa o
                    emprendimiento, te podemos ayudar. Nos encontramos en
                    Tijuana con más de 15 años de experiencia respaldando a
                    empresas y emprendimientos
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
        ) : null
      ) : null}
    </div>
  );
}

export default BlogMain;
