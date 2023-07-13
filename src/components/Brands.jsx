import React, { Component } from "react";
import Slider from "react-slick";
import {
  Airbnb,
  Amazon,
  FedEx,
  Google,
  Microsoft,
  Ola,
  Oyo,
  Walmart,
} from "../img/index";

export default class Brands extends Component {
  render() {
    const settings = {
      infinite: true,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 1000,
      slidesToShow: 6,
      slidesToScroll: 1,
    };
    const partners = [
      {
        img: Airbnb,
      },
      {
        img: Amazon,
      },
      {
        img: FedEx,
      },
      {
        img: Google,
      },
      {
        img: Microsoft,
      },
      {
        img: Ola,
      },
      {
        img: Oyo,
      },
      {
        img: Walmart,
      },
    ];

    return (
      <div className="swiper_js">
        <Slider {...settings}>
          {partners?.map((partner) => (
            <div className="swiper">
              <img src={partner.img} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
