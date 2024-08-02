import React, { useState } from "react";
import { JetBrains_Mono, Sancreek } from "next/font/google";
import { motion } from "framer-motion";

const jetBrainsMono = Sancreek({
  subsets: ["latin"], // You can specify the subsets you need
  weight: "400", // Specify the weights you need
  style: "normal", // Specify the style you need
});
export default function Navbar() {
  const [opened, setOpened] = useState(false);

  const opacity = {
    initial: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };
  return (
    <nav className="  p-[4vw] flex items-center justify-between w-full lg:hidden ">
      <h1 className={`${jetBrainsMono.className} text-4xl text-orange z-50`}>
        TALHA
      </h1>
      <div
        className="z-50 cursor-pointer"
        onClick={() => setOpened((prev) => !prev)}
      >
        <h1>MENU</h1>
      </div>

      <motion.div
        variants={opacity}
        initial="  initial"
        animate={opened ? "open" : "exit"}
        className="block  min-h-screen  absolute top-0 pt-20 px-8  z-40 left-0 bg-black w-full "
      >
        <div className="relative">
          <span className="heading pl-4">TYPESFACES</span>
        </div>
        <CanvasLink />
        <div className=" relative ">
          <ul className="pt-20 pl-4 heading">
            <li className="mb-2">SUPPORT</li>
            <li className="link ">talhacust7@gamil.com</li>
          </ul>
        </div>
      </motion.div>
    </nav>
  );
}

const link = [
  {
    name: "Adhesion_A",
    node: "Adhesion_A",
  },
  {
    name: "BUNKER_e",
    node: "BUNKER_e",
  },
  {
    name: "Basement_B",
    node: "Basement_B",
  },
  {
    name: "Caniche_C",
    node: "Caniche_C",
  },
  {
    name: "Carpenter_C",
    node: "Carpenter_C",
  },
  {
    name: "Curia_A",
    node: "Curia_A",
  },
  {
    name: "Ffflauta_F",
    node: "Ffflauta_F",
  },
  {
    name: "Trovador_T",
    node: "Trovador_T",
  },
  {
    name: "XERO_X",
    node: "XERO_X",
  },
];
const CanvasLink = () => {
  return (
    <ul className="h-[calc(95vh-70vh)] overflow-y-auto mt-3 p-1">
      {link.map((li, i) => (
        <li key={i} className="linkButton">
          {li.name}
        </li>
      ))}
    </ul>
  );
};
