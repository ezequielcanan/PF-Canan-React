import { CartContext } from "../../context/cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalProducts = cart.reduce((acc, p) => p.quantity + acc, 0);
  return (
    <>
      {totalProducts ? (
        <div className="cart-widget">
          <Link to={"/cart"}>
            <i
              className={
                totalProducts
                  ? "bi bi-cart-fill cart-icon"
                  : "bi bi-cart4 cart-icon"
              }
            />
          </Link>
          <span className="cart-quantity">{totalProducts}</span>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CartWidget;
