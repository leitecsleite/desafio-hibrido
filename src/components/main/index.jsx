import React from "react";
import { useState } from "react";
import { useFetch } from "../../Hooks/usefetch";
import { ProductInfo } from "./productInfo/index";

import "./main.css";
import { Slider } from "../slider";

export const Main = () => {
  const [result, options] = useFetch("https://fakestoreapi.com/products/");
  const produtoSku = result.slice(1, 2);
  console.log(result);

  if (options) {
    return (
      <div>
        <h1>Carregando...</h1>
      </div>
    );
  }

  if (!options) {
    return (
      <>
        {produtoSku &&
          produtoSku.map((produto) => (
            <main className="reactProducPage" key={produto.id}>
              <div className="product">
                <section className="productImages">
                  <div className="productImages-wrapper"></div>
                  <div className="productImages-sku">
                    <img src={produto.image} alt="Produto Sku" />
                  </div>
                </section>
                <ProductInfo
                  text={produto.title}
                  description={produto.description}
                  img={produto.image} 
                />
              </div>
            </main>
          ))}   
      </>
    );
  }
};
