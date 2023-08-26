import "../App.scss";
import Navbar from "../components/Navbar";
import ItemListContainer from "../containers/ItemListContainer";
import ItemDetail from "../components/ItemDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
