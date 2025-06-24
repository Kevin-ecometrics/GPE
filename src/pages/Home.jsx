import Client from "@components/Index/Client";
import Experience from "@components/Index/Experience";
import Hero from "@components/Index/Hero";
import Service from "@components/Index/Service";
import Contact from "@components/Index/Contact";
import ContainerLayout from "@components/Layout/Layout";
import Header from "@components/Index/Header";
import Footer from "@components/Index/Footer";
import About from "@components/Index/About";
import Team from "@components/Index/Team";
import Reviews from "@components/Index/Reviews";
import Sponsors from "@components/Index/Sponsors";
import Blog from "@components/Index/Blog";
import NewsLetter from "@components/Index/NewsLetter";
import { motion, AnimatePresence } from "framer-motion";
import ScrollProgress from "@components/Index/ScrollProgress";
import { Helmet } from "react-helmet-async";

function Index() {
  return (
    <div>
      <Helmet>
        <link rel="canonical" href="https://gpeconsultores.com.mx/home/" />
      </Helmet>
      <ScrollProgress />
      <AnimatePresence mode="popLayout">
        <motion.div>
          <Header />
          <ContainerLayout>
            <Hero />
            <Client />
            <Service />
            <Experience />
          </ContainerLayout>
          <Contact />
          <ContainerLayout>
            <About />
          </ContainerLayout>
          <Team />
          <ContainerLayout>
            <Reviews />
            <Sponsors />
          </ContainerLayout>
          <Blog />
          <NewsLetter />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Index;
