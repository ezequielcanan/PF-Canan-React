import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/client";

const ref = collection(db, "products");
export const fetchProducts = async () => {
  const res = await getDocs(ref);
  const products = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return products;
};

export const fetchProduct = async (id) => {
  const productRef = doc(db, "products", id);
  const res = await getDoc(productRef);
  const product = { ...res.data(), id: res.id };
  return product;
};
