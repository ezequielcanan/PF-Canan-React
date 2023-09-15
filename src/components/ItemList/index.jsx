import Item from "../Item"

const ItemList = ({products}) => {
  return (
    products.map((product) => (
      <Item
        key={product.id}
        id={product.id}
        description={product.description}
        title={product.name}
        image={product.image}
      />
    ))
  )
}

export default ItemList