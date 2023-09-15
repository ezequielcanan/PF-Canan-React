import { CartContext } from "../../context/cartContext"
import { useContext } from "react"
const CartItem = ({title, image, price, quantity, id, product}) => {
  const {addItem, minorQuantity} = useContext(CartContext)
  return (
    <div className="container-cartitem card col-md-3">
      <img className="card-image-top" src={image} alt={title} />
      <div className="body-cartitem card-body">
        <div className="body-info">
          <h2 className="card-text">Subtotal: {price * quantity}</h2>
          <h2>Cantidad: {quantity}</h2>
          <h3>{title}</h3>
          <h4>Precio unitario: {price}</h4>
        </div>
        <div className="body-operators">
          <i onClick={() => addItem(product, 1)} className="bi bi-plus-circle" />
          <i onClick={() => minorQuantity(id)} className="bi bi-dash-circle" />
        </div>
      </div>
    </div>
  )
}

export default CartItem