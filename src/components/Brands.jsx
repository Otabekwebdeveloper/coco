import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
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

function Brands() {
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
    <div className="swipper_js">
      <Swiper
        spaceBetween={50}
        slidesPerView={8}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {partners.map((partner) => (
          <SwiperSlide className="partner">
            <img src={partner.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Brands;
