import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Home from "./pages/client/Home";
import ClientLayout from "./layouts/ClientLayout";
import Shop from "./pages/client/Shop";
import Cart from "./pages/client/Cart";
import Checkout from "./pages/client/Checkout";
import OrderComplete from "./pages/client/OrderComplete";
import Account from "./pages/client/account/Account";
import AccountAddress from "./pages/client/account/AccountAddress";
import Orders from "./pages/client/account/Orders";
import Wishlist from "./pages/client/account/Wishlist";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import toast, { Toaster } from "react-hot-toast";
import CategoryAdd from "./pages/admin/category/CategoryAdd";
import CategoryList from "./pages/admin/category/CategoryList";
import CategoryUpdate from "./pages/admin/category/CategoryUpdate";
import ProductList from "./pages/admin/product/ProductList";
import Detail from "./pages/client/Detail";
import ProductDetail from "./pages/admin/product/ProductDetail";
import ProductAdd from "./pages/admin/product/ProductAdd";
import ProductUpdate from "./pages/admin/product/ProductUpdate";
import { ReactNode, useEffect } from "react";
import OrderList from "./pages/admin/order/OrderList";
import OrderDetail from "./pages/admin/order/OrderDetail";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!token) {
      toast.error("Please log in to continue!");
    }
  }, [token]);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          {/* Auth Routes */}
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          {/* Client Routes */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <ClientLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product-detail/:id" element={<Detail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="order-complete" element={<OrderComplete />} />
            <Route path="account" element={<Account />} />
            <Route path="account/address" element={<AccountAddress />} />
            <Route path="account/orders" element={<Orders />} />
            <Route path="account/wishlist" element={<Wishlist />} />
          </Route>
          {/* Admin Routes */}
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            {/* Category */}
            <Route path="categories" element={<CategoryList />} />
            <Route path="categories/add" element={<CategoryAdd />} />
            <Route
              path="categories/:slug/update"
              element={<CategoryUpdate />}
            />
            {/* Product */}
            <Route path="products" element={<ProductList />} />
            <Route path="products/:slug" element={<ProductDetail />} />
            <Route path="products/add" element={<ProductAdd />} />
            <Route path="products/:slug/update" element={<ProductUpdate />} />
            {/* Order */}
            <Route path="order-lists" element={<OrderList />} />
            <Route path="order-lists/:id" element={<OrderDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
