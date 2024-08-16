import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { CartProvider } from "../components/context/CartProvider";
import Cart from "../components/Cart/Cart";

export default function Routers() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route>
            {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
            <Route path="/Cart" element={<Cart />} />
            <Route path="/" element={<App />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

