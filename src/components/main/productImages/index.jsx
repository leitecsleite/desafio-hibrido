import React from "react";
import { useRef } from "react";
import "./productImages.css";
import scrollButtons from "../../../../public/img/icons8-forward-100.png";

export const ProductImages = ({ image }) => {
  const carouselSkuImg = useRef(null);

  function handleLeftClickSku(e) {
    e.preventDefault();
    carouselSkuImg.current.scrollLeft -=
      carouselSkuImg.current.offsetWidth + 210;
  }

  function handRigthtClicSku(e) {
    e.preventDefault();
    carouselSkuImg.current.scrollLeft +=
      carouselSkuImg.current.offsetWidth + 120;
  }

  return (
    <section className="productImages">
      <div className="productImages-wrapper">
       <div className="box-image">
         <img src={image} alt="img-wrapper" />
       </div> 
      </div>

      <div className="productImages-sku">
        <div className="productImages-sku-slider" ref={carouselSkuImg}>
          <div className="item-sku">
            <img src={image} alt="Produto Sku" />
          </div>
          <div className="item-sku">
            <img src={image} alt="Produto Sku" />
          </div>
          <div className="item-sku diferent">
            <img src={image} alt="Produto Sku" />
          </div>
        </div>
        <div className="buttons-slider-image-sku">
          <button onClick={handleLeftClickSku}>
            <img src={scrollButtons} alt="scroll left" />
          </button>
          <button onClick={handRigthtClicSku}>
            <img src={scrollButtons} alt="scroll right" />
          </button>
       </div>
        </div>
        
    </section>
  );
};
