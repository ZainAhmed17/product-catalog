'use client'
import React, { useEffect } from "react";
import { ProductController } from "./product.controller";
import { useProductContext } from "@/context/products/products.context";
import SingleProuduct from "./components/product/singleProuduct";

const page =  () => {
  const { fetchProducts } = ProductController();
  const { state } = useProductContext();

  useEffect(() => {
    fetchProducts();
  }, []);

  if (state.isLoading) {
    return <div>Loading...</div>;
  }

  return <div>
    <h1>Product Catalog</h1>
   {state.products.length > 0 && <div>
      {state.products.map((product) => (
        <SingleProuduct key={product.id} product={product} />
      ))}
    </div>}
  </div>;
};

export default page;
