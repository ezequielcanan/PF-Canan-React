import "../App.scss";
import Navbar from "../components/Navbar";
import ItemListContainer from "../containers/ItemListContainer";
import ItemDetail from "../components/ItemDetail";
import CartView from "../components/CartView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "../context/cartContext";

const Router = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};
export default Router;
