import React from "react";
import { Image1, Image2, Image3, Image4 } from "../img";

export default function Group() {
  const groups = [
    {
      id: 0,
      img: Image1,
      name: "Rakabuming Suhu",
      job: "Founder, CTO",
    },
    {
      id: 1,
      img: Image2,
      name: "Jessica Aduhai",
      job: "SEO Master",
    },
    {
      id: 2,
      img: Image3,
      name: "Azalea Perumahan",
      job: "Account Executive",
    },
    {
      id: 3,
      img: Image4,
      name: "Gatot Bambang",
      job: "Admin Bro",
    },
  ];

  return (
    <div className="section_group container">
      <div className="group_header">
        <h1>Get to know our mastah & super keren</h1>
        <p>
          We provide SEO services to help your website rank higher on search
          engines like Google.
        </p>
      </div>
      <div className="groups">
        {groups.map((group) => (
          <div className="group">
            <img src={group.img} alt="" />
            <h1>{group.name}</h1>
            <p>{group.job}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
