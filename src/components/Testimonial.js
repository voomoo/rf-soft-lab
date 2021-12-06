import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  centerMode: true,
  centerPadding: "0px",
};
const Testimonial = () => {
  return (
    <div className="testimonial">
      <Container>
        <p>Our solution is equipped with everything you need to succeed!</p>
        <h2>Our Services</h2>
        <Slider {...settings}>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </Slider>
      </Container>
    </div>
  );
};

export default Testimonial;
