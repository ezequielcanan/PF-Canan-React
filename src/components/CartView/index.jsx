import { CartContext } from "../../context/cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem";

const CartView = () => {
  const { cart, clear } = useContext(CartContext);
  
  return (
    <main className="main-cart">
      {!cart.length ? (
        <div className="container-cart-vacio">
          <h2>El carrito esta vacio</h2>
          <Link className="btn btn-primary" to="/">
            Volver a la pagina principal
          </Link>
        </div>
      ) : (
        <>
          <div className="container-finalizar-or-clear">
            <Link className="btn order-btn" to={"/order"}>
              Finalizar compra
            </Link>
            <i
              onClick={() => clear()}
              className="bi bi-trash-fill clear carrito"
            />
          </div>
          <section className="cartitems-container">
            {cart.map((p) => {
              return (
                <CartItem
                  key={p.id}
                  product={p}
                  id={p.id}
                  quantity={p.quantity}
                  price={p.price}
                  title={p.title}
                  image={p.image}
                />
              );
            })}
          </section>
        </>
      )}
    </main>
  );
};

export default CartView;
