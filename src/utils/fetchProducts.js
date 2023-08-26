const fetchProducts = async () => {
  const res = await fetch("/products.json");
  const products = await res.json();
  return products;
};

export default fetchProducts;
