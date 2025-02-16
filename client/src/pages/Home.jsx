import React from "react";
import { brand, partner } from "../assets/assets.js";
import About from "../components/About";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Services from "../components/Services.jsx";
import Partner from "../components/Partner.jsx";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="flex flex-row px-7  relative h-screen  bg-[url('https://www.bing.com/th/id/OGC.12d20769d54760c65132e93e3b1e387e?pid=1.7&rurl=https%3a%2f%2fdouglasgodoy.com.br%2fwp-content%2fuploads%2f2021%2f02%2fgif-high-tech.gif&ehk=3uC3GFX0TLJHMclC3w5FsLGTC0RDkE23xgPGtUHUBeI%3d')]   max-md:text-[0.6rem] max-md:bg-blue-700">
        <div className=" z-0 absolute h-screen  inset-0 bg-blue-900 max-md:opacity-90 opacity-70"></div>

        <section className="flex flex-col items-center justify-center">
          <div className="text-white  opacity-90 w-[700px] text-center  mt-[5rem] max-md:w-full ">
            <h1 className="text-5xl font-bold max-md:text-3xl">
              Welcome to {brand.name} – Instant & Reliable Top-Ups! 🚀
            </h1>
            <article className="text-2xl mt-8 max-md:text-lg">
              Stay connected with fast, secure, and affordable airtime, data,
              cable TV, and electricity payments – anytime, anywhere!
            </article>
            <p className="mt-5">
              ✅ Instant Transactions | ✅ Best Prices | ✅ 24/7 Service
            </p>
            <p className="mt-5">
              📲 Recharge Now & Enjoy Seamless Convenience!
            </p>
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
        <img
          src={brand.image}
          alt=""
          className="  opacity-[70%] max-md:hidden"
        />
      </div>
      <Services />
      <About />

      <section className="flex gap-[90px] p-7 justify-center text-3xl max-md:gap-4 max-md:p-3 ">
        <Partner image={partner.dstv} />
        <Partner image={partner.gotv} />
        <Partner image={partner.startimes} />
        <Partner image={partner.mtn} />
        <Partner image={partner.airtel} />
        <Partner image={partner.glo} />
      </section>

      <Footer />
    </>
  );
}
