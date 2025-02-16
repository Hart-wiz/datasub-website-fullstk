import React from "react";
import { partner } from "../assets/assets.js";

export default function Partner({ image }) {
  return (
    <div>
      <img
        src={image}
        alt=""
        className="w-[90px] h-[90px] max-md:w-8 max-md:h-8"
      />
    </div>
  );
}
