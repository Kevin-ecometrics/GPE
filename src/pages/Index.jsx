import { useState, useEffect } from "react";
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
import Loader from "@components/Animation/Loader";
import { motion, AnimatePresence } from "framer-motion";
import ScrollProgress from "@components/Index/ScrollProgress";

function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
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
          {/* <Blog /> */}
          <NewsLetter />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Index;
