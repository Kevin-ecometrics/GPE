import Header from "@components/Index/Header";
import ContainerLayout from "@components/Layout/Layout";
import Footer from "@components/Index/Footer";
import BlogMain from "@components/Blogs/BlogMain";
import NewsLetter from "@components/Index/NewsLetter";

function BlogsDinamic() {
  return (
    <>
      <Header />
      <ContainerLayout>
        <BlogMain />
        <NewsLetter />
      </ContainerLayout>
      <Footer />
    </>
  );
}

export default BlogsDinamic;
