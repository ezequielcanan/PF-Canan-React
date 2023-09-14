import { useEffect, useState, useContext } from "react";
import { fetchProduct } from "../../utils/fetchProducts";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import ItemCount from "../ItemCount";

const ItemDetail = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetchProduct(id).then((product) => {
      setProduct(product);
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
              <img src={product.image} alt="" />
            </div>
            <p>{product.description}</p>
            <h2>$ {product.price}</h2>
            <ItemCount product={product}/>
          </article>
        </section>
      )}
    </main>
  );
};

export default ItemDetail;
