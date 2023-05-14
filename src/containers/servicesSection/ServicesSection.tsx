import React from "react";
import "./servicesSection.css";
import { ServiceCard } from "../../components";

const ServicesSection = () => {
  return (
    <div className="servicesSection__container">
      <ServiceCard
        title="All brands"
        text="Our contractors install all leading South African brands solar panels"
      />
      <ServiceCard
        title="Fast and Reliable"
        text="Do not wait days to get a response"
      />
      <ServiceCard
        title="Get Expert Advice"
        text="Local Pros Solar Panel contractor will give you professional advice"
      />
    </div>
  );
};

export default ServicesSection;
