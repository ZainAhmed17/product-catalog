'use client'
import React, { useEffect } from "react";
import { ProductController } from "./product.controller";
import { useProductContext } from "@/context/products/products.context";
import CatalogMain from "./components/catalog-main/catalogMain";
import CatalogSkeleton from "./components/catalog-skeleton/catalogSkeleton";
import Productlayout from "@/app/layout/productLayout";

const page = () => {
  const { fetchProducts } = ProductController();
  const { state } = useProductContext();

  useEffect(() => {
    fetchProducts();
  }, []);

  if (state.isLoading) {
    return <CatalogSkeleton />;
  }

  return <CatalogMain />;
};

export default page;
