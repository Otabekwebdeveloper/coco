import React from "react";
import { Link } from "react-router-dom";
import { Arrow, Chart, Group } from "../img";
export default function Header() {
  return (
    <>
      <div className="header_section">
        <div className="container">
          <div className="section_main container">
            {/* Chap taraf */}
            <div className="main">
              <div className="menu">
                <div className="logo">
                  <img src={Chart} alt="" />
                </div>
                <div className="links">
                  <Link to={"/"}>About</Link>
                  <Link to={"/blog"}>Blog</Link>
                  <Link to={"/contact"}>Contact</Link>
                </div>
              </div>
              <div className="main_left">
                <h1>Growing your business comes down to 1- thing</h1>
                <p>
                  That's where we come in. We make it easy for you to boost your
                  online search results and grow your business online. Contact
                  us today to get started!
                </p>
                <div className="btn">
                  <Link to={"/sign up"}>Get Started Free</Link>
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </div>
            {/* O'ng taraf */}
            <div className="main_right">
              <img src={Group} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
