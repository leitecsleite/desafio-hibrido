import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

import scrollButtons from "../../../public/img/icons8-forward-100.png";
import "./slider.css";

export const Slider = () => {
  const [data, setData] = useState();
  const carousel = useRef(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then(setData);
  }, []);

  function handleLeftClick(e) {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  function handRigthtClic(e) {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  if (!data || !data.length) return null;

  return (
    <div className="container">
      <h2>Quem viu este produto, também comprou</h2>
      <div className="carousel" ref={carousel}>
        {data.map((item) => {
          return (
            <div className="item" key={item.id}>
              <img src={item.image} alt="" />
              <div className="info">
                <span className="name">{item.title}</span>
                <span className="price"><strong>R$ {item.price}</strong></span> 
                <span className="comprar"><p>COMPRAR</p></span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttons-slider">
        <button onClick={handleLeftClick}>
          <img src={scrollButtons} alt="scroll left" />
        </button>
        <button onClick={handRigthtClic}>
          <img src={scrollButtons} alt="scroll right" />
        </button>
      </div>
    </div>
  );
};
