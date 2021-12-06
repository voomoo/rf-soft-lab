import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Appbar from "./Appbar";
import BuiltFor from "./BuiltFor";
import HeroSection from "./HeroSection";
import About from "./About";
import OurServices from "./OurServices";
import Innovation from "./Innovation";
import OurProducts from "./OurProducts";

function Root() {
  return (
    <div className="App">
      <Appbar />
      <HeroSection />
      <BuiltFor />
      <About />
      <OurServices />
      <Innovation />
      <OurProducts />
    </div>
  );
}

export default Root;
