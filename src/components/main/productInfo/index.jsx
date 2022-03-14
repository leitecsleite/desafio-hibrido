import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../../context";
import "./ProductInfo.css";
import free from "../../../../public/img/icons8-free-shipping-50.png";

export const ProductInfo = (props) => {
  const [count, setCount] = useState(0);
  const [classAtive, setClasseAtive] = useState("desative");
  const [conteudo, setConteudo] = useState("");
  const [mensageFrete, setMensageFrete] = useState("desativado");

  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    contextState,
    setContextState,
  } = theContext;

  function countSkuLess() {
    if (count >= 1) {
      const numberSku = count - 1;
      setCount(numberSku);
      setContextState({ ...contextState, counter: numberSku });

      if (numberSku < 10) {
        setMensageFrete("desativado");
      }
    }

    if (count <= 0) {
      setContextState({ ...contextState, counter: "" });
    }
  }

  function countSkuMore() {
    const numberSku = count + 1;
    setCount(numberSku);
    setContextState({ ...contextState, counter: numberSku });

    if (numberSku >= 10) {
      setMensageFrete("mensagem-frete-gratis");
      setConteudo(
        ' <p className="mensage-frete"> FRETE GRÁTIS </p><img src={free} alt="free" />'
      );
    }
  }

  return (
    <section className="productInfo">
      <div className="breadcrumb">
        <span>
          <a href="#">Home /</a>
          <a href="#">Masculino/</a>
          <a href="#">Camisa</a>
        </span>
      </div>
      <div className="name-and-share">
        <h1>{props.text}</h1>
      </div>

      <div className="price-container">
        <span>
          <strong>10 x R$ 34,99</strong> / R$349,99
        </span>
        <div className="price-share">
          <a href="#">Ver parcelas</a>
        </div>
      </div>
      <div className="skuselector">
        <div className="skuselector-img">
          <img src={props.img} alt="" />
        </div>
        <div className="skuselector-size">
          <ul>
            <li>
              <strong>P</strong>
            </li>
            <li>
              <strong>M</strong>
            </li>
            <li>
              <strong>G</strong>
            </li>
            <li>
              <strong>GG</strong>
            </li>
          </ul>
        </div>

        <div className="quantidade-de-unidade">
          <span>Restam apenas poucas unidades</span>
        </div>
      </div>

      <div className="quantidade">
        <p>
          <strong>QUANTIDADE</strong>
        </p>
        <div className="quantidade-sku">
          <div className="quantidadeBloco menos" onClick={countSkuLess}>
            <strong>-</strong>
          </div>
          <div className="quantidadeBloco value">
            <strong>{count}</strong>
          </div>
          <div className="quantidadeBloco mais" onClick={countSkuMore}>
            <strong>+</strong>
          </div>
        </div>

        <div className={mensageFrete}>
          <p className="mensage-frete"> FRETE GRÁTIS </p>
        </div>
      </div>
      <div className="buybutton">
        <div className="buybutton-name">ADICIONAR À SACOLA</div>
      </div>
      <div className="frete">
        <div className="infoFrete">
          <p className={classAtive}>Calcule o frete e prazo de entrega</p>
          <p>Calcule prazo de entrega</p>
          <a href="#">Não sei meu CEP</a>
        </div>
        <div className="calculo-frete">
          <input type="text" />
          <button>CALCULAR</button>
        </div>
      </div>

      <div className="description">
        <h2>Descrição do Produto</h2>
        <p>{props.description}</p>
      </div>
    </section>
  );
};
