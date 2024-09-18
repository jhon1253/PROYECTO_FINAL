import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    return savedCart || { id_producto: [] }; 
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const startCart = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const addToCart = async (product) => {
    if (!cart || !cart.id_producto || !cart.id_carrito) {
      console.error("Cart is not initialized correctly");
      return;
    }

    const existingProduct = cart.id_producto.find(
      (item) => item.id === product.id
    );

    const newCart = existingProduct
      ? {
          ...cart,
          id_producto: cart.id_producto.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
      : {
          ...cart,
          id_producto: [...cart.id_producto, { ...product, quantity: 1 }],
        };

    //en {cart?.id_carrito} tenemos que pasarle algo mas para que se guarden los productos en el carrito de pg.
    try {
      const response = await fetch(
        `http://localhost:3000/carrito/${cart.id_carrito}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id_producto: newCart.id_producto }),
        }
      );

      if (!response.ok) throw new Error("Network response was not ok");

      await response.json();
      localStorage.setItem("cart", JSON.stringify(newCart));
      setCart(newCart);
    } catch (error) {
      console.error("Failed to add product to cart: ", error);
    }
  };

const removeFromCart = async (product) => {
  if (!cart || !cart.id_producto || !cart.id_carrito) {
    console.error("Cart is not initialized correctly");
    return;
  }

  // Actualizar el carrito localmente
  const updatedCart = cart.id_producto
    .map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    )
    .filter((item) => item.quantity > 0); // Filtra los productos con cantidad 0

  const newCart = { ...cart, id_producto: updatedCart };

  try {
    const response = await fetch(
      `http://localhost:3000/carrito/${cart.id_carrito}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_producto: updatedCart }),
      }
    );


    await response.json();
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  } catch (error) {
    console.error("Failed to remove product from cart: ", error);
  }
};

const clearCart = async () => {
  if (!cart || !cart.id_carrito) {
    console.error("Cart is not initialized correctly");
    return;
  }

  // Vaciar el carrito localmente
  const vaciarCart = { ...cart, id_producto: [] };

  // Enviar la solicitud PUT para vaciar el carrito en el backend
  try {
    const response = await fetch(
      `http://localhost:3000/carrito/${cart.id_carrito}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_producto: [] }), // Enviar el carrito vacío
      }
    );

    if (!response.ok) throw new Error("Network response was not ok");

    await response.json();
    localStorage.setItem("cart", JSON.stringify(vaciarCart));
    setCart(vaciarCart);
  } catch (error) {
    console.error("Failed to clear cart: ", error);
  }
};

  return (
    <CartContext.Provider
      value={{ cart, startCart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export default useCart;
