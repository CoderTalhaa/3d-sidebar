import React from "react";
import Section1 from "./Section1";
import { JetBrains_Mono, Sancreek } from "next/font/google";
import { Brand } from "./canvas/Brand";
import Scene from "./canvas/Scene";

const jetBrainsMono = Sancreek({
  subsets: ["latin"], // You can specify the subsets you need
  weight: "400", // Specify the weights you need
  style: "normal", // Specify the style you need
});

export default function HomePage() {
  return (
    <div className=" z-20 relative w-screen lg:w-auto   ">
      <div className="absolute inset-0 w-full h-full z-30">
        <Scene />
      </div>
      <div className="min-h-svh flex justify-center items-center">
        <h1
          className={`${jetBrainsMono.className} lg:text-8xl text-3xl text-orange z-20`}
        >
          TO BE CONTINUED
        </h1>
      </div>
    </div>
  );
}
