import ItemCount from "../ItemCount";

const ItemDetail = ({ product }) => {
  return (
    <section className="row row-details">
      <article className="container-details col">
        <h1>{product.name}</h1>
        <div className="container-img-detail">
          <img src={product.image} alt="" />
        </div>
        <div className="container-body-detail">
          <p>{product.description}</p>
          <h2>$ {product.price}</h2>
          <ItemCount product={product} />
        </div>
      </article>
    </section>
  );
};

export default ItemDetail;
