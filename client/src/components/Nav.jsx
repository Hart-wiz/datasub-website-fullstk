import React from "react";
import { icon } from "../assets/assets";

export default function Nav() {
  return (
    <>
      <div className=" fixed w-full z-10 nav">
        <img src="" alt="" />
        <ul className="flex flex-row gap-9 justify-end p-7 bg-blue-900 font-bold text-white max-md:hidden ">
          <li>
            <a href="#">Home</a>
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
            <a href="#contact">Contact us</a>
          </li>

          <a
            href="#"
            className="pointer bg-violet-950 p-3 rounded-lg hover:opacity-70 "
          >
            <button>login</button>
          </a>

          <a
            href="#"
            className="pointer bg-violet-950 p-3 rounded-lg hover:opacity-70 "
          >
            <button>Register</button>
          </a>
        </ul>

        {/* for mobile navigation */}
        <div className="hidden max-md:flex justify-end bg-blue-800">
          <img src={icon.menu} alt="menu" className="m-7" />
        </div>
      </div>
    </>
  );
}
