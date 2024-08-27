import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { CartProvider } from "../components/context/CartProvider";
import Cart from "../components/Cart/Cart";
import Login from "../components/Login/Login";
import RegisterForm from "../components/Register/Register";
import HomePage from "../Rutas/HomePage";

export default function Routers() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/tienda" element={<App />} />
            <Route path="/tienda/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
