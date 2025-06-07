'use client'
import { createContext, Dispatch, useContext, useReducer } from "react";
import {
  initialState,
  ProductAction,
  productsReducer,
  ProductState,
} from "./products.reducer";

interface ProductContextType {
  state: ProductState;
  dispatch: Dispatch<ProductAction>;
}

const ProductContext = createContext<ProductContextType | null>(null);

const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
      throw new Error(
        'useProductContext must be used within ProductProvider'
      );
    }
    return context;
  };
  
  export default ProductContextProvider;
  