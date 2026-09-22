import { Route, Routes } from "react-router-dom";

import ProductLayout from "../Layout/ProductLayout";
import AdminPortal from "../pages/admin/AdminPortal";
import Login from "../pages/auth/Login";
import Contact from "../pages/Contact";
import CustomerPortal from "../pages/customer/CustomerPortal";
import Home from "../Pages/Home";
import Notfound from "../pages/Notfound";
import AllProducts from "../pages/products/productCategory/AllProduct";
import Books from "../pages/products/productCategory/Books";
import Clothing from "../pages/products/productCategory/Clothing";
import Electronics from "../pages/products/productCategory/Electronics";
import ProductDetail from "../pages/products/ProductDetail";
import ProtectedRoute from "../route/ProtectedRoute";
import RoleBasedRoute from "../route/RoleBasedRoute";
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

      <Route path="/login" element={<Login />} />
      <Route
        path="/adminPortal"
        element={
          <RoleBasedRoute allowedRoles={["admin"]}>
            <AdminPortal />
          </RoleBasedRoute>
        }
      />
      <Route
        path="/customerPortal"
        element={
          <RoleBasedRoute allowedRoles={["customer"]}>
            <CustomerPortal />
          </RoleBasedRoute>
        }
      />
      <Route
        path="/productsList/productDetail/:id"
        element={
          <ProtectedRoute>
            <ProductDetail />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default AppRouter;
