import React from "react";
import { brand } from "../assets/assets.js";

export default function Home() {
  return (
    <div className="flex flex-row px-7 w-[100vw] relative h-screen  bg-[url('https://images.unsplash.com/photo-1739389716979-d62f1d6fe559?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D')]   max-md:text-[0.6rem] max-md:">
      <div className=" z-0 absolute h-screen  inset-0 bg-blue-800 opacity-70"></div>

      <section className="flex flex-col items-center justify-center">
        <div className="text-white  opacity-90 w-[700px] text-center  mt-[5rem] max-md:w-[90%] ">
          <h1 className="text-5xl font-bold max-md:text-2xl">
            Welcome to {brand.name} – Instant & Reliable Top-Ups! 🚀
          </h1>
          <article className="text-2xl mt-8 max-md:text-lg">
            Stay connected with fast, secure, and affordable airtime, data,
            cable TV, and electricity payments – anytime, anywhere!
          </article>
          <p className="mt-5">
            ✅ Instant Transactions | ✅ Best Prices | ✅ 24/7 Service
          </p>
          <p className="mt-5">📲 Recharge Now & Enjoy Seamless Convenience!</p>
        </div>
        <div className=" z-[30] text-white flex gap-8 mt-8 font-semibold ">
          <a
            href=""
            className="bg-blue-700 px-6 py-3 border-none rounded-lg hover:opacity-[80%] focus:bg-yellow-600 "
          >
            <button>login</button>
          </a>
          <a
            href=""
            className="bg-violet-700 px-6 py-3 border-none rounded-lg hover:bg-violet-900 focus:bg-white"
          >
            <button>Register</button>
          </a>
        </div>
      </section>
      <img src={brand.image} alt="" className="  opacity-[70%] max-md:hidden" />
    </div>
  );
}
