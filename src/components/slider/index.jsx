import { useFetch } from "../../Hooks/usefetch";
import "./slider.css";

export const Slider = () => {
  const [result, options] = useFetch('"https://fakestoreapi.com/products/"');

  return (
    <div className="container">
      <div className="carousel">
        <div className="item">
          <img src={item.image} alt="" />
          <div className="info">
            <span className="name">{item.title}</span>
            <span className="oldPrice">44000</span>
            <span className="price"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
