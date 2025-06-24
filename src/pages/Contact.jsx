import Hero from "@components/Contact/Hero";
import ContainerLayout from "@components/Layout/Layout";
import Header from "@components/Index/Header";
import Footer from "@components/Index/Footer";
import NewsLetter from "@components/Index/NewsLetter";
import Form from "@components/Contact/Form";

function Contact() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <ContainerLayout>
        <Hero />
        <Form />
      </ContainerLayout>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Contact;
