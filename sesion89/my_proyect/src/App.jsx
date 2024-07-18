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

  const { data: mensclothing } = useFetch(
    "https://fakestoreapi.com/products/category/men's%20clothing"
  );
  
  const { data: womensclothing } = useFetch(
    "https://fakestoreapi.com/products/category/women's%20clothing"
  );

  return (
    <>
      <h1 className="titile-cabe">Get products</h1>
      {/* {loading && <p>Loading...</p>}
      {error && <p>Error</p>} */}
      {/* {electronics.length <= 0 && !loading && <p>No hay productos</p>} */}{" "}
      <div  className="titulos">
        <h1>electronics</h1>
        <div className="imagenes">
          {electronics.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>

      <div  className="titulos">
        <h1>jewelery</h1>
        <div className="imagenes">
          {jewelery.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>

      <div  className="titulos">
        <h1>mens clothing</h1>
        <div className="imagenes">
          {mensclothing.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>

      <div  className="titulos">
        <h1>womens clothing</h1>
        <div className="imagenes">
          {womensclothing.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
    </>
  );
}
