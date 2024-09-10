import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import OrderPage from "./pages/admin/OrderPage";
import { Toaster } from "react-hot-toast";
import CategoryAdd from "./pages/admin/category/CategoryAdd";
import CategoryList from "./pages/admin/category/CategoryList";
import CategoryUpdate from "./pages/admin/category/CategoryUpdate";
import ProductList from "./pages/admin/product/ProductList";
import Detail from "./pages/client/Detail";
import ProductDetail from "./pages/admin/product/ProductDetail";
import ProductAdd from "./pages/admin/product/ProductAdd";
import ProductUpdate from "./pages/admin/product/ProductUpdate";

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
            <Route path="product-detail/:id" element={<Detail />}></Route>
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
            {/* Category */}
            <Route path="categories" element={<CategoryList />}></Route>
            <Route path="categories/add" element={<CategoryAdd />}></Route>
            <Route
              path="categories/:slug/update"
              element={<CategoryUpdate />}
            ></Route>
            {/* Product */}
            <Route path="products" element={<ProductList />}></Route>
            <Route path="products/:slug" element={<ProductDetail />}></Route>
            <Route path="products/add" element={<ProductAdd />}></Route>
            <Route
              path="products/:slug/update"
              element={<ProductUpdate />}
            ></Route>
            {/* Order */}
            <Route path="order-lists" element={<OrderPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
