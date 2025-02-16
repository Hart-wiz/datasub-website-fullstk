import React from "react";

export default function Servicecard({ image, title, article }) {
  return (
    <div className="border-3 rounded-lg  w-[300px] h-auto p-8 flex flex-col items-center shadow-2xl">
      <figure>
        <img src={image} alt="" className="w-[90px] h-[90px]" />
      </figure>
      <div>
        <h1 className="font-bold text-lg">{title}</h1>
        <article>{article}</article>
      </div>
    </div>
  );
}
