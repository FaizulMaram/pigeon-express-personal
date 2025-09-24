import Navbar from "./components/Navbar";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import SectionSeven from "./components/SectionSeven";
import SectionEight from "./components/SectionEight";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <section className="min-h-screen bg-[#F4F9FC] lg:px-4 xl:px-18 px-4 py-4 overflow-x-hidden">
        <Navbar />
        <SectionOne />
        <SectionTwo />
      </section>
      <section>
        <SectionThree />
      </section>
      <section>
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
        <Footer />
      </section>
    </>
  );
};

export default Home;
