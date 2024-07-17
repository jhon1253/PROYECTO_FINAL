import { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/Product";
import { useFetch } from "./Hooks/useGetProducts";
// import Header from "./components/Headers/Header.jsx";
export default function App() {
  const { data: electronics } = useFetch(
    "https://fakestoreapi.com/products/category/electronics"
  );

  const { data: jewelery } = useFetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );

  return (
    <>
      <h1 className="titile-cabe">Get products</h1>
      {/* {loading && <p>Loading...</p>}
      {error && <p>Error</p>} */}
      {/* {electronics.length <= 0 && !loading && <p>No hay productos</p>} */}{" "}
      <div>
        <h1>electronics</h1>
        <div>
          {electronics.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
      <div>
        <h1>jewelery</h1>
        <div>
          {jewelery.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
    </>
  );
}
