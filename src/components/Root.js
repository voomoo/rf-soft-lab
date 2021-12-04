import "bootstrap/dist/css/bootstrap.min.css";
import Appbar from "./Appbar";
import BuiltFor from "./BuiltFor";
import HeroSection from "./HeroSection";
import About from "./About";

function Root() {
  return (
    <div className="App">
      <Appbar />
      <HeroSection />
      <BuiltFor />
      <About />
    </div>
  );
}

export default Root;
