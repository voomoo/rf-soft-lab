import React from "react";

const OurServicesCard = ({ title, details, image }) => {
  return (
    <div className="our-services-card">
      <h4>{title}</h4>
      <img src={image} alt="" />
      <p>{details}</p>
    </div>
  );
};

export default OurServicesCard;
