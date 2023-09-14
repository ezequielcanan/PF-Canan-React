import { CartContext } from "../../context/cartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const CartView = () => {
  const { cart, addItem, removeItem, clear } = useContext(CartContext)
  return (
    <main className="main-cart">
      {!cart.length ? (
        <div className="container-cart-vacio">
          <h2>El carrito esta vacio</h2>
          <Link className="btn btn-primary" to="/">Volver a la pagina principal</Link>
        </div>
      ) : (
        <h1>GOD</h1>
      )}
    </main>
  )
}

export default CartView