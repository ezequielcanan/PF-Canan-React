import { useEffect, useState } from "react";
import fetchProducts from "../../utils/fetchProducts";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import ItemCount from "../ItemCount";

const ItemDetail = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    fetchProducts().then((products) => {
      setProduct(products.find((p) => p.id === parseInt(id)));
      setLoading(false);
    });
  }, [id]);
  return (
    <main className="main container-fluid">
      {loading ? (
        <Loading speed={5} customText={"Loading..."} />
      ) : (
        <section className="row row-details">
          <article className="container-details col">
            <h1>{product.name}</h1>
            <div className="container-img-detail">
              <img src="/imagen.jpg" alt="" />
            </div>
            <p>{product.description}</p>
            <h2>$ {product.price}</h2>
            <ItemCount />
          </article>
        </section>
      )}
    </main>
  );
};

export default ItemDetail;
