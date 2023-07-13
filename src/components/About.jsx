import React from "react";
import image2 from "../img/image2.png";

export default function About() {
  return (
    <div className="section_about">
      <div className="about_section container">
        <div className="about_menu">
          <div className="about_left">
            <img src={image2} alt="" />
          </div>
          <div className="about_right">
            <h1>Make Your Website More User-Friendly for Search Engines</h1>
            <p>
              We'll match you with our team of expert strategists who will make
              sure your top-of-the-line strategies are always on target. Contact
              us today to get started!
            </p>
            <div className="count">
              <div className="number_text">
                <h1>120K</h1>
                <p>Domains Indexed</p>
              </div>
              <div className="number_text">
                <h1>8.990</h1>
                <p>Project Done</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
