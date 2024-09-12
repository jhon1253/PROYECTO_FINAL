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
    if (!cart || !cart.id_producto) {
      console.error("Cart is not initialized correctly");
      return;
    }

    const existingProduct = cart.id_producto.find(
      (item) => item.id === product.id
    );

    let newCart;
    if (existingProduct) {
      newCart = {
        ...cart,
        id_producto: cart.id_producto.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    } else {
      newCart = {
        ...cart,
        id_producto: [...cart.id_producto, { ...product, quantity: 1 }],
      };
    }

    try {
      await fetch(`http://localhost:3000/carrito/${cart?.id_carrito}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id_producto: newCart.id_producto,
        }),
      }).then((res) => res.json());

      localStorage.setItem("cart", JSON.stringify(newCart));
      setCart(newCart);
    } catch (error) {
      console.error("Failed to add product to cart: ", error);
    }
  };

  const removeFromCart = (product) => {
    if (!cart || !cart.id_producto) {
      console.error("Cart is not initialized correctly");
      return;
    }

    setCart((prevState) => {
      const updatedCart = prevState.id_producto
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // Filtra los productos con cantidad 0

      localStorage.setItem(
        "cart",
        JSON.stringify({ id_producto: updatedCart })
      );
      console.log(updatedCart);

      return { ...prevState, id_producto: updatedCart };
    });
  };

  const clearCart = () => {
    localStorage.setItem("cart", JSON.stringify({ id_producto: [] }));
    setCart({ id_producto: [] });
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
