import { useEffect } from "react";
import Router from "./Router/Router";
import { db } from "./firebase/client";
import { doc, getDoc, query, collection, where, getDocs } from "firebase/firestore";

const App = () => {
  const productRef = doc(db, "products", "5DEovMYNdyeaRGBba37U");
  const productsRef = collection(db, "products")

  const getProducts = async () => {
    const data = await getDocs(productsRef)
    const dataFiltrada = data.docs.map((p) => ({...p.data(), id: p.id}) )
    console.log(dataFiltrada)
  }

  const getProduct = () => {
    getDoc(productRef).then((s) => {
      if (s.exists()) {
        console.log({ id: s.id, ...s.data() });
      }
    });
  };

  useEffect(() => {
    getProducts();
  }, [])

  return <Router />;
};

export default App;
