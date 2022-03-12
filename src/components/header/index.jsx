import React from "react";
import { useState } from "react";
import whatsApp from '../../../public/img/icons8-whatsapp.svg';
import logo from "../../../public/img/logo-hibrido.svg";
import lupa from "../../../public/img/icons8-search-24.png";
import bolsa from "../../../public/img/icons-bolsa-2.png";
import location from '../../../public/img/icons8-location-64.png';
import card from '../../../public/img/icons8-credit-card-96.png';
import { useContext } from "react";
import { GlobalContext } from "../../context";

import icons_menu from "../../../public/img/icons8-menu.svg";

import "./header.css";

export const Header = () => {
  const [menuMbobile, setMenuMobile] = useState("mobile");
  

  const theContext = useContext(GlobalContext);
    const {contextState: {body, counter},
          contextState,
          setContextState} = theContext; 
  const [active, setActive] = useState(true);
   


  function menu() {
    if (active) {
      setMenuMobile("menu_mobile");
      setActive(false);
    }
    if (!active && menuMbobile === "menu_mobile") {
      setMenuMobile("mobile");
      setActive(true);
      console.log("chegou aqui");
    }
  }

  return (
    <div className="aplication">
      <div className="hibrido-header">
        <div className="preHeader">
          <div className="preHeader-left">
            <p>Nossas Lojas</p>
            <img src={location} alt="location" />
          </div>
          <div className="preHeader-middle">
            Frete grátis a partir de 10 peças
          </div>
          <div className="preHeader-right">
              <p>Chama no whatsApp</p>
              <img src={whatsApp} alt="contato" />
          </div>
        </div>
        <div className="middleContainer">
          <div className="menu">
            <div className="logo">
              <img src={logo} alt="" className="imgLogo" />
            </div>
            <div className="menu_desktop">
              <nav className="hibrido-nav">
                <ul className="navbar-bar">
                  <li>
                    <a href="#">NOVIDADES</a>
                  </li>
                  <li>
                    <a href="#">MASCULINO</a>
                  </li>
                  <li>
                    <a href="#">FEMININO</a>
                  </li>
                  <li>
                    <a href="#">MARCAS</a>
                  </li>
                  <li>
                    <a href="#">PROMOÇÕES</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="toggle">
              <img src={icons_menu} alt="" onClick={menu} />
            </div>

            <div className="search-hibrido">
              <label className="hibrido-input">
                <div className="hibrido-input-group">
                  <img src={lupa} alt="search" />
                  <input type="text" />
                </div>
                <img src={bolsa} alt="sacola de compra" />
                <span className='numero-de-produto'>{counter}</span>
              </label>
            </div>
            <div className="icons">
             <div className="pay-card">
                  <p>Cartão Hibrido</p>
                    <img src={card} alt="card" />
              </div>
               <div className="icons-contact">
                   <img src={whatsApp} alt="contato" />
                   <img src={bolsa} alt="compra" />
                </div>
            </div>
          </div>
        </div>
        <div className={menuMbobile}>
          <nav className="hibrido-nav">
            <ul className="navbar-bar">
              <li>
                <a href="#">NOVIDADES</a>
              </li>
              <li>
                <a href="#">MASCULINO</a>
              </li>
              <li>
                <a href="#">FEMININO</a>
              </li>
              <li>
                <a href="#">MARCAS</a>
              </li>
              <li>
                <a href="#">PROMOÇÕES</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
