import { useEffect, useState } from "react";
import fetchProducts from "../../utils/fetchProducts";
import { useParams } from "react-router-dom";
import Item from "../../components/Item";
import Loading from "../../components/Loading";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
  useEffect(() => {
    fetchProducts().then((products) => {
      category
        ? setProducts(products.filter((p) => p.category === category))
        : setProducts(products);
      setLoading(false);
    });
  }, [category]);
  return (
    <main className="container-fluid main">
      <section className="row">
        {loading ? (
          <Loading speed={5} customText={"Loading..."} />
        ) : (
          products.map((product) => (
            <Item
              key={product.id}
              id={product.id}
              description={product.description}
              title={product.name}
            />
          ))
        )}
      </section>
    </main>
  );
};

export default ItemListContainer;
