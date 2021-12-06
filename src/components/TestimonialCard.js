import React from "react";
import quote from "../assets/images/quote.png";
import user from "../assets/images/user.png";

const TestimonialCard = () => {
  return (
    <div className="testimonial-card">
      <img src={quote} alt="" />
      <h6>
        Amazing Software. It has made all the difference in my business! A real
        game changer! Great value for money! I am really appreciate your work.
      </h6>
      <div className="user">
        <img src={user} alt="" />
        <h5>Hudson Wills</h5>
        <p>Manager, SA Corporation</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
