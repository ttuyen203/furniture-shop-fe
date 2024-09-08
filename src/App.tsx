import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Home from "./pages/client/Home";
import ClientLayout from "./layouts/ClientLayout";
import Shop from "./pages/client/Shop";
import ProductDetail from "./pages/client/ProductDetail";
import Cart from "./pages/client/Cart";
import Checkout from "./pages/client/Checkout";
import OrderComplete from "./pages/client/OrderComplete";
import Account from "./pages/client/account/Account";
import AccountAddress from "./pages/client/account/AccountAddress";
import Orders from "./pages/client/account/Orders";
import Wishlist from "./pages/client/account/Wishlist";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import ProductPage from "./pages/admin/ProductPage";
import OrderPage from "./pages/admin/OrderPage";
import { Toaster } from "react-hot-toast";
import CategoryAdd from "./pages/admin/category/CategoryAdd";
import CategoryList from "./pages/admin/category/CategoryList";
import CategoryUpdate from "./pages/admin/category/CategoryUpdate";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          {/* Auth Routes */}
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          {/* Client Routes */}
          <Route path="/" element={<ClientLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="shop" element={<Shop />}></Route>
            <Route
              path="product-detail/:id"
              element={<ProductDetail />}
            ></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="checkout" element={<Checkout />}></Route>
            <Route path="order-complete" element={<OrderComplete />}></Route>
            <Route path="account" element={<Account />}></Route>
            <Route path="account/address" element={<AccountAddress />}></Route>
            <Route path="account/orders" element={<Orders />}></Route>
            <Route path="account/wishlist" element={<Wishlist />}></Route>
          </Route>
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="categories" element={<CategoryList />}></Route>
            <Route path="categories/add" element={<CategoryAdd />}></Route>
            <Route path="categories/:id/update" element={<CategoryUpdate />}></Route>
            <Route path="products" element={<ProductPage />}></Route>
            <Route path="order-lists" element={<OrderPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
