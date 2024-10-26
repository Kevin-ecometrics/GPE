function Sitemap() {
  return (
    <div>
      <h1 className="text-start text-[#CD512F] mb-4">
        Encuentranos en la siguiente dirección
      </h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13458.656870422024!2d-116.9879937!3d32.5084027!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9380644535f09%3A0xc9470ed0f2dd2c1b!2sPlaza%20Patria%20Tijuana!5e0!3m2!1ses!2smx!4v1729104025004!5m2!1ses!2smx"
        width="570"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        className="md:w-[570px] md:h-[450px] w-full h-[450px]"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Sitemap;
