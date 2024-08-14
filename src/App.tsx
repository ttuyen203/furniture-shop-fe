import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Home from "./pages/client/Home";
import ClientLayout from "./layouts/ClientLayout";
import Shop from "./pages/client/Shop";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
