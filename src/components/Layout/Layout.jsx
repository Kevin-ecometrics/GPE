/* eslint-disable react/prop-types */
const ContainerLayout = ({ children }) => {
  return (
    <>
      <section className="container mx-auto">{children}</section>
    </>
  );
};

export default ContainerLayout;
