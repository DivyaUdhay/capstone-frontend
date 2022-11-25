import React, { useEffect, useState, useContext } from "react";
import ControlledCarousel from "./coursel.js";
import { Link } from "react-router-dom";
import Mobiles from "../homepage/Mobiles.js";
import Womens from "../homepage/Womens.js";
import Mackup from "../homepage/Mackup.js";
import Kids from "../homepage/Kids.js";

export function Home() {
  const arr = [
    {
      font: "fa fa-headphones fa-3x",
      heading: "ORDER YOUR ITEM",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-",
    },
    {
      font: "fa fa-truck fa-3x",
      heading: "DELIVERY OR PICK UP",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-",
    },
    {
      font: "fa fa-puzzle-piece fa-3x",
      heading: "MORE PRODUCTS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-",
    },
  ];
  return (
    <>
      <ControlledCarousel />

      <Mobiles />
      <Womens />
      <Mackup />
      <Kids />

      <div className="transport">
        {arr.map((trans) => (
          <section
            className="accod"
            uk-scrollspy="cls:uk-animation-fade delay: 500"
            uk-scrollspy-class="uk-animation-slide-bottom"
          >
            <i class={trans.font} aria-hidden="true"></i>
            <h3 style={{ color: "grey" }}>{trans.heading}</h3>
            <p>{trans.description}</p>
            <i class="fa-solid fa-shirt"></i>
          </section>
        ))}
      </div>
    </>
  );
}
