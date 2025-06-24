import Header from "@components/Index/Header";
import ContainerLayout from "@components/Layout/Layout";
import Footer from "@components/Index/Footer";
import BlogMain from "@components/Blogs/BlogMain";
import NewsLetter from "@components/Index/NewsLetter";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
function BlogsDinamic() {
  const pathname = useLocation().pathname;

  const canonical = `https://gpeconsultores.com.mx${pathname}`;
  return (
    <>
      <Helmet>
        <link rel="canonical" href={canonical} />
      </Helmet>
      <Header />
      <ContainerLayout>
        <BlogMain />
      </ContainerLayout>
      <NewsLetter />

      <Footer />
    </>
  );
}

export default BlogsDinamic;
