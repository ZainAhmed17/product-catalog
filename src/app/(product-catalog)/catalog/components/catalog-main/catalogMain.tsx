import { useProductContext } from "@/context/products/products.context";
import React from "react";
import SingleProduct from "../single-product/singleProduct";
import styles from "./catalogMain.module.scss";

const CatalogMain = () => {
  const { state } = useProductContext();
  return (
    <div className={styles.pageContainer}>
      {state.products.length > 0 && (
        <div>
          <div className={styles.grid}>
            {state.products.map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogMain;
