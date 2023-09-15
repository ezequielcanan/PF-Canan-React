import { CartContext } from "../../context/cartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartItem from "../CartItem"

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
        cart.map((p) => {
          return <CartItem key={p.id} product={p} id={p.id} quantity={p.quantity} price={p.price} title={p.title} image={p.image} />
        })
      )}
    </main>
  )
}

export default CartView