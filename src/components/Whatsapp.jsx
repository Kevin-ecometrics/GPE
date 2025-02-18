import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "6631216201"; // Reemplaza con tu número
  const message = "Hola, me gustaría obtener más información."; // Mensaje opcional
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppButton;
