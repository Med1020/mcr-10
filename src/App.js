import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Departments from "./Pages/Department/Departments";
import Navbar from "./Component/Navbar/Navbar";
import Products from "./Pages/Products/Products";
import NewProduct from "./Pages/NewProduct/NewProduct";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/products" element={<Products />} />
        <Route path="/newproduct" element={<NewProduct />} />
        <Route path="/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
