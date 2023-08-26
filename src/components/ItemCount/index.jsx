import { useState } from "react";

const ItemCount = () => {
  const [count, setCount] = useState(0);

  const suma = () => {
    setCount(count + 1);
  };
  const resta = () => {
    count > 0 && setCount(count - 1);
  };
  return (
    <div className="item-count">
      <i onClick={resta} className="bi bi-dash-circle" />
      <p>Cantidad: {count}</p>
      <i onClick={suma} className="bi bi-plus-circle" />
    </div>
  );
};

export default ItemCount;
