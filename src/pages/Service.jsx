import { useEffect, useState } from "react";
import Hero from "@components/Service/Hero";
import ContainerLayout from "@components/Layout/Layout";
import Header from "@components/Index/Header";
import { list, text } from "@components/Service/ListService";
import Tema1 from "@components/Service/Tema1";
import Tema2 from "@components/Service/Tema2";
import Tema3 from "@components/Service/Tema3";
import Tema4 from "@components/Service/Tema4";
import { useLocation } from "react-router-dom";
import Footer from "@components/Index/Footer";
import NewsLetter from "@components/Index/NewsLetter";

function Service() {
  const pathname = useLocation().pathname;
  const id = pathname.split("/").pop();
  const [description, setDescription] = useState("");

  const titlesWithAccents = {
    "Logistica-corporativa": "Logística corporativa",
    "Administracion-de-nomina": "Administración de nómina",
    "Asesoria-contable": "Asesoría contable",
    "Asesoria-laboral-individual": "Asesoría laboral individual",
  };

  useEffect(() => {
    const index = list.indexOf(id);
    if (index === -1) {
      window.location.href = "/";
    } else {
      setDescription(text[index]);
    }
  }, [id]);

  const formattedText = titlesWithAccents[id] || id;

  return (
    <div className="overflow-x-hidden">
      <Header />
      <ContainerLayout>
        <Hero title={formattedText} subtitle={description} />
        {id === "Logistica-corporativa" ? (
          <Tema1 />
        ) : id === "Administracion-de-nomina" ? (
          <Tema2 />
        ) : id === "Asesoria-contable" ? (
          <Tema3 />
        ) : id === "Asesoria-laboral-individual" ? (
          <Tema4 />
        ) : null}
        <NewsLetter />
        <Footer />
      </ContainerLayout>
    </div>
  );
}

export default Service;
