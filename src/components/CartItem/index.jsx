const CartItem = ({title, image, price}) => {
  return (
    <div className="container-cartitem">
      <img src={image} alt={title} />
      <div className="body-cartitem">
        
      </div>
    </div>
  )
}