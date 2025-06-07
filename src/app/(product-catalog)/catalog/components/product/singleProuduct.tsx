import { ProductDTO } from "@/data/types/products/products.types";
import React from "react";
import styles from "./singleProduct.module.scss";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/core/constants/routes";
import Image from "next/image";

const SingleProuduct = ({ product }: { product: ProductDTO }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(ROUTES.PRODUCT_DETAILS(product.id.toString()))}
      className={styles.product}
    >
      <h1>{product.title}</h1>
      <Image src={product.thumbnail} alt={product.title} width={100} height={100} />
      <div>{product.price}</div>
    </div>
  );
};

export default SingleProuduct;
