import { ProductDTO } from "@/data/types/products/products.types";
import React from "react";
import styles from "./productDetails.module.scss";
import Image from "next/image";
import { useProductContext } from "@/context/products/products.context";

const ProductDetails = ({ productDetails }: { productDetails: ProductDTO }) => {
  const { addToCart, checkIfProductIsInCart } = useProductContext();

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <Image
          src={productDetails.images[0]}
          alt={productDetails.title}
          width={400}
          height={400}
          className={styles.image}
          priority
        />
      </div>

      <div className={styles.detailsSection}>
        <h1 className={styles.title}>{productDetails.title}</h1>
        <p className={styles.description}>{productDetails.description}</p>
        <div className={styles.price}>${productDetails.price}</div>{" "}
        <button
          disabled={checkIfProductIsInCart(productDetails.id)}
          className={`${styles.addToCartBtn} ${checkIfProductIsInCart(productDetails.id) ? styles.disabled : ""}`}
          onClick={() => addToCart(productDetails)}
        >
          {checkIfProductIsInCart(productDetails.id)
            ? "Added to Cart"
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
