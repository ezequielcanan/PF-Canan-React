const CartWidget = ({ quantity }) => {
  return (
    <div className="cart-widget">
      <i
        className={
          quantity ? "bi bi-cart-fill cart-icon" : "bi bi-cart4 cart-icon"
        }
      />
      <span className="cart-quantity">
        <span>{quantity}</span>
      </span>
    </div>
  );
};

export default CartWidget;
