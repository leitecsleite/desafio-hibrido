import React from "react";
import { useState } from "react";
import { useFetch } from "../../Hooks/usefetch";
import { ProductInfo } from "./productInfo/index";
import { ProductImages } from "./productImages";

import "./main.css";
import {Slider} from "../slider";

export const Main = () => {
  const [result, options] = useFetch("https://fakestoreapi.com/products/");
  const produtoSku = result.slice(1, 2);

  if (options) {
    return (
      <div>
        <h1>Carregando...</h1>
        <main className="reactProducPage">
              <div className="product">
              <ProductImages
                  
                />
                <ProductInfo
                  
                />
              </div>
              <Slider/>
          </main>
      </div>
    );
  }

  if (!options) {
    return (
      <>
        {produtoSku &&
          produtoSku.map((produto) => (
            <main className="reactProducPage">
              <div className="product" key={produto.id}>
                <ProductImages
                  image ={produto.image}
                />
                <ProductInfo
                  text={produto.title}
                  description={produto.description}
                  img={produto.image}
                />
              </div>
              <Slider/>
            </main>
          ))}

      
      </>
    );
  }
};
