import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    return savedCart || { id_producto: [], id_carrito: null };
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const startCart = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const createCart = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3000/carrito`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) throw new Error("Failed to create cart");

      const newCart = await response.json();
      startCart(newCart);
    } catch (error) {
      console.error("Error creating cart: ", error);
    }
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

    try {
      const response = await fetch(
        `http://localhost:3000/carrito/${cart.id_carrito}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id_producto: newCart.id_producto }),
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("Error from server:", errorResponse);
        throw new Error("Network response was not ok");
      }

      const updatedCart = await response.json();
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
    } catch (error) {
      console.error("Failed to add product to cart: ", error);
    }
  };

  const removeFromCart = async (product) => {
    if (!cart || !cart.id_producto || !cart.id_carrito) {
      console.error("Cart is not initialized correctly");
      return;
    }

    const updatedCart = cart.id_producto
      .map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0); // Filtrar productos con cantidad 0


    try {
      const response = await fetch(
        `http://localhost:3000/carrito/${cart.id_carrito}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id_producto: updatedCart }),
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("Error from server:", errorResponse);
        throw new Error("Failed to update cart");
      }

      const updatedCartResponse = await response.json();
      localStorage.setItem("cart", JSON.stringify(updatedCartResponse));
      setCart(updatedCartResponse);
    } catch (error) {
      console.error("Failed to remove product from cart: ", error);
    }
  };

  const clearCart = async () => {
    if (!cart || !cart.id_carrito) {
      console.error("Cart is not initialized correctly");
      return;
    }


    try {
      const response = await fetch(
        `http://localhost:3000/carrito/${cart.id_carrito}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id_producto: [] }), // Enviar carrito vacío
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("Error from server:", errorResponse);
        throw new Error("Failed to clear cart");
      }

      const clearedCartResponse = await response.json();
      localStorage.setItem("cart", JSON.stringify(clearedCartResponse));
      setCart(clearedCartResponse);
    } catch (error) {
      console.error("Failed to clear cart: ", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        startCart,
        createCart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export default useCart;
