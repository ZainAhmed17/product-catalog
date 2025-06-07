import React from "react";
import ProductDetails from "./components/product-details/productDetails";
import { getProductDetails } from "@/data/api/products/products.api";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const paramsData = await params;
  const productDetails = await getProductDetails(paramsData.id);

  if (!productDetails.data) {
    return <div>No product details found</div>;
  }

  return (
    productDetails && <ProductDetails productDetails={productDetails.data} />
  );
};

export default page;
