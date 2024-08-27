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

function App() {
  return (
    <>
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
