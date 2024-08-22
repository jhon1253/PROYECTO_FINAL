import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { CartProvider } from "../components/context/CartProvider";
import Cart from "../components/Cart/Cart";
import Login from "../components/Login/Login";
import RegisterForm from "../components/Register/Register";

export default function Routers() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/Cart" element={<Cart />} />
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
