import React from "react";
import { brand, card } from "../assets/assets";
import Aboutcard from "./Aboutcard";

export default function About() {
  return (
    <div
      id="about"
      className="relative z-0 h-auto  py-[120px] items-center flex text-center flex-col gap-[6rem]"
    >
      <section className="w-[60%] ">
        <h1 className="font-bold text-5xl text-center">About {brand.name}</h1>
        <article className="text-lg">
          Tired of unreliable top-ups and slow transactions? At {brand.name}, we
          bring you a seamless, fast, and secure way to purchase airtime, data
          bundles, cable TV subscriptions, and electricity bills – all at
          unbeatable prices!
        </article>
      </section>
      <section className="flex flex-row flex-wrap">
        <Aboutcard
          image={card[0].image}
          title={card[0].title}
          article={card[0].article}
        />
        <Aboutcard
          image={card[1].image}
          title={card[1].title}
          article={card[1].article}
        />
        <Aboutcard
          image={card[2].image}
          title={card[2].title}
          article={card[2].article}
        />
      </section>
    </div>
  );
}
