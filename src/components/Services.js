import React from "react";
import Title from "./Title";
import { service } from "../Data";
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitles="Services" />
      <div className="section-center services-center">
        {service.map(({ id, heading, text, icon }) => {
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{heading}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
