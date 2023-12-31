import "../App.scss";
import Navbar from "../components/Navbar";
import ItemListContainer from "../containers/ItemListContainer";
import ItemDetailContainer from "../containers/ItemDetailContainer";
import CartView from "../components/CartView";
import Order from "../components/Order";
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
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};
export default Router;
