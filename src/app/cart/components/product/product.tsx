import { ProductDTO } from "@/data/types/products/products.types";
import React from "react";
import styles from "./product.module.scss";
import Image from "next/image";

const CartProduct = ({
  product,
  removeFromCart,
}: {
  product: ProductDTO;
  removeFromCart: (id: number) => void;
}) => {
  return (
    <div className={styles.productContainer}>
      <div className={styles.productContent}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={100}
          height={100}
        />
        <div className={styles.productDetails}>
          <h3>{product.title}</h3>
          <p>{product.price}</p>
        </div>
      </div>
      <div className={styles.productActions}>
        <button
          onClick={() => removeFromCart(product.id)}
          className={styles.productButton}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
