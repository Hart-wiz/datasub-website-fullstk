import React from "react";
import Servicecard from "./Servicecard.jsx";
import { card } from "../assets/assets.js";

export default function Services() {
  return (
    <div
      id="services"
      className="relative z-0 h-auto  py-[120px] items-center flex text-center flex-col gap-[6rem]"
    >
      <h1 className="font-bold text-5xl text-center">OUR SERVICES</h1>
      <section className="flex flex-wrap gap-[120px] justify-center">
        <Servicecard
          image={card[3].image}
          title={card[3].title}
          article={card[3].article}
        />
        <Servicecard
          image={card[4].image}
          title={card[4].title}
          article={card[4].article}
        />
        <Servicecard
          image={card[5].image}
          title={card[5].title}
          article={card[5].article}
        />
      </section>
    </div>
  );
}
