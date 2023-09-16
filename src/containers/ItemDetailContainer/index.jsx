import { fetchProduct } from "../../utils/fetchProducts";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import ItemDetail from "../../components/ItemDetail";

const ItemDetailContainer = () => {
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
        <ItemDetail product={product} />
      )}
    </main>
  );
};

export default ItemDetailContainer;
