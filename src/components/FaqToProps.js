import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function FaqsElements({ item, index }) {
  const [open, setOpen] = useState();
  return (
    <div className="features container">
      <div className="featurec">
        <div
          className={`${open ? "isOpen" : "notOpen"}`}
          onClick={() => setOpen(() => !open)}
        >
          <div className="title1">
            <h1>
              {index + 1} . {item.title}
            </h1>
            <div className="plus">
              {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
          </div>
        </div>
      </div>
      <div className="text_answer">
        <p>{open && item.text}</p>
      </div>
    </div>
  );
}
