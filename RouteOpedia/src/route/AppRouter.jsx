import { Route, Routes } from "react-router-dom";

import ProductLayout from "../Layout/ProductLayout";
import Contact from "../pages/Contact";
import Home from "../Pages/Home";
import Notfound from "../pages/Notfound";
import AllProducts from "../pages/products/productCategory/AllProduct";
import Books from "../pages/products/productCategory/Books";
import Clothing from "../pages/products/productCategory/Clothing";
import Electronics from "../pages/products/productCategory/Electronics";
import ProductDetail from "../pages/products/ProductDetail";
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/productsList" element={<ProductLayout />}>
        <Route index element={<AllProducts />}></Route>
        <Route path="clothing" element={<Clothing />}></Route>
        <Route path="electronics" element={<Electronics />}></Route>
        <Route path="books" element={<Books />}></Route>
      </Route>
      <Route
        path="/productsList/productDetail/:id"
        element={<ProductDetail />}
      />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default AppRouter;
