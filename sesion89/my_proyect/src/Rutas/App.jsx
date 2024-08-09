import { useEffect, useState } from "react";
import Product from "../components/Product";
import { useFetch } from "../Hooks/useGetProducts";
import Header from "../components/Menu/Header";
import SearchBox from "../components/Search/Search";
import { getCartProducts, setCartProducts } from "../utils/localStorage";
// import RegisterForm from "../components/Register/Register.jsx";



export default function App() {

const [productsInCart,setProductsInCart] = useState (getCartProducts())



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


  const addProductCart = (product) => {
    const isAdded = productsInCart.some((pic) => product.id == pic.id);

    const newProducstInCart = isAdded
      ? productsInCart.map((pic) => ({
          ...pic,
          quantity: pic.id == product.id ? pic.quantity + 1 : pic.quantity,
        }))
      : [...productsInCart, { ...product, quantity: 1 }];

    setProductsInCart(newProducstInCart);
    setCartProducts(newProducstInCart);
  };



// const [openRegister, setOpenRegister] = useState(false);

//   const mostrarRegister = () => {
//     setOpenRegister(!openRegister);
//   }

  const [searchTerm, setSearchTerm] = useState ("");

  const filterPorducts = (products, searchTerm) =>{
    return products.filter((product) =>
      product.title.toLowerCase().includes(setSearchTerm.toLowerCase())
    );
  };

  useEffect(() => {
    [setSearchTerm, electronics, jewelery, mensclothing, womensclothing];
  }
)

  return (
    <>
      <Header productsInCart={productsInCart} />
      {/* mostrarRegister={mostrarRegister} */}
      {/* {openRegister && <RegisterForm />} */}
      <div className="search flex justify-center mb-5">
        <h1 className="  text-white ">SHOPING</h1>

        {/* <SearchBox searchTerm={searchTerm} onSearchChange={setSearchTerm} /> */}
      </div>
      {}{" "}
      <div className="titulos" name="electronics">
        <h1 className="text-3xl text-white mb-4  titulos bg-red-700 p-4 my-2 rounded-lg shadow-lg">Electronics</h1>
        <div className="product-container">
          {electronics &&
            electronics.map((product, index) => (
              <Product
                onClick={() => addProductCart(product)}
                key={index}
                {...product}
              />
            ))}
        </div>
      </div>
      <div className="titulos1" name="jewelery">
        <h1 className="text-3xl text-white mb-4  titulos bg-red-700 p-4 my-2 rounded-lg shadow-lg">Jewelery</h1>
        <div className="imagenes1">
          {jewelery.map((product, index) => (
            <Product
              onClick={() => addProductCart(product)}
              key={index}
              {...product}
            />
          ))}
        </div>
      </div>
      <div className="titulos2" name="mensclothing">
        <h1 className="text-3xl text-white mb-4  titulos bg-red-700 p-4 my-2 rounded-lg shadow-lg">Mens Clothing</h1>
        <div className="imagenes2">
          {mensclothing.map((product, index) => (
            <Product
              onClick={() => addProductCart(product)}
              key={index}
              {...product}
            />
          ))}
        </div>
      </div>
      <div className="titulos3" name="womensclothing">
        <h1 className="text-3xl text-white mb-4  titulos bg-red-700 p-4 my-2 rounded-lg shadow-lg">Womens Clothing</h1>
        <div className="imagenes3">
          {womensclothing.map((product, index) => (
            <Product
              onClick={() => addProductCart(product)}
              key={index}
              {...product}
            />
          ))}
        </div>
      </div>
      <div></div>
    </>
  );
}
