import { useState, useContext } from "react";
import { CartContext } from "../../context/cartContext";

const ItemCount = ({ product }) => {
  const [count, setCount] = useState(1);
  const { addItem } = useContext(CartContext);

  const suma = () => {
    setCount(count + 1);
  };
  const resta = () => {
    count > 1 && setCount(count - 1);
  };
  return (
    <>
      <button
        className="btn btn-success"
        onClick={() => (addItem(product, count), setCount(1))}
      >
        Comprar
      </button>
      <div className="item-count">
        <i onClick={resta} className="bi bi-dash-circle" />
        <p>Cantidad: {count}</p>
        <i onClick={suma} className="bi bi-plus-circle" />
      </div>
    </>
  );
};

export default ItemCount;
