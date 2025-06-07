'use client';
import { createContext, useContext } from "react";
import { ProductDTO } from "@/data/types/products/products.types";
import { usePersistedState } from "@/hooks/useLocalStorage";

interface ProductContextType {
  addToCart: (product: ProductDTO) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  cartItems: ProductDTO[];
  checkIfProductIsInCart: (id: number) => boolean;
}

const ProductContext = createContext<ProductContextType | null>(null);

const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartItems, setCartItems] = usePersistedState<ProductDTO[]>("cart", []);


  const addToCart = (product: ProductDTO) => {
    if (!cartItems.find((item) => item.id === product.id)) {
      setCartItems([...cartItems, product]);
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const checkIfProductIsInCart = (id: number) => {
    return cartItems.find((item) => item.id === id) ? true : false;
  };


  return (
    <ProductContext.Provider
      value={{  addToCart, removeFromCart, clearCart, cartItems , checkIfProductIsInCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within ProductProvider");
  }
  return context;
};

export default ProductContextProvider;
