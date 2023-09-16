import { useEffect, useState } from "react";
import { fetchProducts } from "../../utils/fetchProducts";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import ItemList from "../../components/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    fetchProducts().then((products) => {
      category
        ? setProducts(products.filter((p) => p.categoryId === category))
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
          <ItemList products={products} />
        )}
      </section>
    </main>
  );
};

export default ItemListContainer;
