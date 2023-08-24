import '../App.scss'
import Navbar from '../components/Navbar'
import ItemListContainer from '../containers/ItemListContainer'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="category/:id" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
