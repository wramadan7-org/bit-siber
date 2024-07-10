import NavbarComponent from "../../components/navbar/NavbarComponent";
import HeaderImage from "../../assets/images/header.png";

const HomePage = () => {
  document.title = "BIT Siber";
  return (
    <section>
      <section className="relative min-h-[686px]">
        <img
          src={HeaderImage}
          alt="header"
          className="absolute w-full h-full object-cover object-center"
        />

        <section className="sticky top-0 bg-transparent z-10">
          <NavbarComponent />
        </section>
      </section>

      <h1>HOME</h1>
    </section>
  );
};

export default HomePage;
