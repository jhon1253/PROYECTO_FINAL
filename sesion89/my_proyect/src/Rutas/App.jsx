import { useEffect, useState } from "react";
import Product from "../components/Product";
import { useFetch } from "../Hooks/useGetProducts";
import Header from "../components/Menu/Header";
import "../App.css";
import HomePage from "./HomePage";

export default function App() {
  const {
    data: allProducts,
    loading,
    error,
  } = useFetch("https://fakestoreapi.com/products");

  const [electronics, setElectronics] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [mensclothing, setMensclothing] = useState([]);
  const [womensclothing, setWomensclothing] = useState([]);

  useEffect(() => {
    if (allProducts) {
      setElectronics(
        allProducts.filter((product) => product.category === "electronics")
      );
      setJewelery(
        allProducts.filter((product) => product.category === "jewelery")
      );
      setMensclothing(
        allProducts.filter((product) => product.category === "men's clothing")
      );
      setWomensclothing(
        allProducts.filter((product) => product.category === "women's clothing")
      );
    }
  }, [allProducts]);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error loading products</p>;

  return (
    <>
      <Header />
      <HomePage />
      <div className="search">
        <h1 className="title">
          <img
            src="/src/assets/cristal.png"
            alt="Logo"
            className="logo_esfera"
          />
          Kame Store
        </h1>
      </div>
      <div className="section" name="electronics">
        <h1 className="heading">Tecnología</h1>
        <div className="product-container">
          {electronics.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
      <div className="section" name="jewelery">
        <h1 className="heading">Joyería</h1>
        <div className="product-container">
          {jewelery.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
      <div className="section" name="mensclothing">
        <h1 className="heading">Ropa Masculina</h1>
        <div className="product-container">
          {mensclothing.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
      <div className="section" name="womensclothing">
        <h1 className="heading">Ropa Femenina</h1>
        <div className="product-container">
          {womensclothing.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
    </>
  );
}
