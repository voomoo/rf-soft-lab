import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Appbar from "./Appbar";
import BuiltFor from "./BuiltFor";
import HeroSection from "./HeroSection";
import About from "./About";
import OurServices from "./OurServices";

function Root() {
  return (
    <div className="App">
      <Appbar />
      <HeroSection />
      <BuiltFor />
      <About />
      <OurServices />
    </div>
  );
}

export default Root;
