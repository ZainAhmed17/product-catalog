'use client'
import React from "react";
import SingleProduct from "../single-product/singleProduct";
import styles from "./catalogMain.module.scss";
import { ProductDTO } from "@/data/types/products/products.types";

const CatalogMain = ({
  products,
}: {
  products: ProductDTO[];
}) => {

  return (
    <div className={styles.pageContainer}>
      {products.length > 0 && (
        <div>
          <div className={styles.grid}>
            {products.map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogMain;
