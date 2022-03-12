import React from "react";
import { useState } from "react";
import { useFetch } from "../../Hooks/usefetch";

import "./main.css";

export const Main = () => {
  const [result, options] = useFetch("https://fakestoreapi.com/products/");
  const produtoSku = result.slice(1,2);
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
      <main className="reactProductPage">
        {produtoSku &&
          produtoSku.map((produto) => (
            <div className="product" key={produto.id}>
              <section className="productImages">
                <div className="productImages-wrapper"></div>
                <div className="productImages-sku">
                  <img src={produto.image} alt="Produto Sku" />
                </div>
              </section>
              <section className="productInfo">
                <div className="name-and-share"></div>
                <div className="price-container"></div>
                <div className=""></div>
              </section>
            </div>
          ))}
      </main>
    );
  }
};
