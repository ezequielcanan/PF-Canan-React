const OrderItem = ({ image, price, title, quantity }) => {
  return (
    <div className="container-order-item">
      <img src={image} alt={title} />
      <div className="order-item-body">
        <p className="subtotal-orderitem">
          Subtotal: ${(price * quantity).toFixed(2)}
        </p>
        <p className="title-orderitem">
          {title}: {quantity}
        </p>
      </div>
    </div>
  );
};

export default OrderItem;
