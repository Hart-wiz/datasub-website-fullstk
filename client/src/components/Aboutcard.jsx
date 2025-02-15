import React from "react";

export default function Aboutcard({ image, title, article }) {
  return (
    <div className=" flex flex-col items-center w-96 border-0">
      <figure>
        <img src={image} alt="flight" className=" w-[250px] h-[150px] " />
      </figure>
      <div className="card-body p-4rem">
        <h2 className=" font-mono font-bold text-xl">{title}</h2>
        <p className="text-sm">{article}</p>
      </div>
    </div>
  );
}
