import Headers from "@components/Index/Header";
import BlogsList from "@components/Blogs/Blogs";
import NewsLetter from "@components/Index/NewsLetter";
import Footer from "@components/Index/Footer";
import ContainerLayout from "@components/Layout/Layout";

function Blogs() {
  return (
    <>
      <Headers />
      <ContainerLayout>
        <BlogsList />
        <NewsLetter />
      </ContainerLayout>
      <Footer />
    </>
  );
}

export default Blogs;
