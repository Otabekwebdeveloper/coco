import React from "react";
import { HiPresentationChartLine, HiCloud } from "react-icons/hi";
import { RiSettings4Fill } from "react-icons/ri";

export default function Features() {
  const box = [
    {
      Id: 0,
      img: <HiPresentationChartLine />,
      title: "Improving UX with A/B",
      text: "A/B testing is useful when you're launching something new or if you already have a large audience.",
    },
    {
      Id: 1,

      img: <RiSettings4Fill />,
      title: "Optimize Page Content",
      text: "Great content relies on relevance. Any blog post, video you create should focus on your target market.",
    },
    {
      Id: 2,

      img: <HiCloud />,
      title: "Build Seamless Experience",
      text: "Optimize your website for all devices, not just desktops. This is especially true of mobile devices.",
    },
  ];

  return (
    <div className="features_secion container">
      <div className="features_header">
        <h1>Awesome Features Optimizing Your Website </h1>
      </div>
      <div className="flex">
        {box.map((item) => (
          <div className="box1">
            <div className="icon">{item.img}</div>
            <h1>{item.title}</h1>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
