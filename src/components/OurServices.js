import React from "react";
import { Container } from "react-bootstrap";
import OurServicesCard from "./OurServicesCard";
import Slider from "react-slick";
import webapp from "../assets/images/webapp.png";
import mobileapp from "../assets/images/mobileapp.png";
import uiux from "../assets/images/uiux.png";
import ecom from "../assets/images/ecom.png";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
};
const OurServices = () => {
  return (
    <div className="our-services">
      <Container>
        <h2>Our Services</h2>
        <p>Our solution is equipped with everything you need to succeed!</p>
        <Slider {...settings}>
          <OurServicesCard
            title="Web Application Development"
            details="Create a beautiful website for your clients and candidates! Browse through various themes and customize your choice with our powerful website builder. Already have a website? No problem! Simply use our application theme and link from you website."
            image={webapp}
          />
          <OurServicesCard
            title="Mobile  Application Development"
            details="Create a beautiful website for your clients and candidates! Browse through various themes and customize your choice with our powerful website builder. Already have a website? No problem! Simply use our application theme and link from you website."
            image={mobileapp}
          />
          <OurServicesCard
            title="UX/UI Design"
            details="Create a beautiful website for your clients and candidates! Browse through various themes and customize your choice with our powerful website builder. Already have a website? No problem! Simply use our application theme and link from you website."
            image={uiux}
          />
          <OurServicesCard
            title="Ecommerce/Corporate Solution"
            details="Create a beautiful website for your clients and candidates! Browse through various themes and customize your choice with our powerful website builder. Already have a website? No problem! Simply use our application theme and link from you website."
            image={ecom}
          />
          <OurServicesCard
            title="UX/UI Design"
            details="Create a beautiful website for your clients and candidates! Browse through various themes and customize your choice with our powerful website builder. Already have a website? No problem! Simply use our application theme and link from you website."
            image={uiux}
          />
          <OurServicesCard
            title="Ecommerce/Corporate Solution"
            details="Create a beautiful website for your clients and candidates! Browse through various themes and customize your choice with our powerful website builder. Already have a website? No problem! Simply use our application theme and link from you website."
            image={ecom}
          />
        </Slider>
      </Container>
    </div>
  );
};

export default OurServices;
