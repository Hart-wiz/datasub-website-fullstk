import React from "react";

export default function Nav() {
  return (
    <>
      <div>
        <img src="" alt="" />
        <ul className="flex flex-row gap-11 justify-end p-7 bg-blue-800 font-bold text-white">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#product">Products</a>
          </li>
          <li>
            <a href="contact">Contact us</a>
          </li>
        </ul>
      </div>
    </>
  );
}
