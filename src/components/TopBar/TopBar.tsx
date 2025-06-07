"use client";
import React, { useEffect } from "react";
import { ROUTES } from "@/core/constants/routes";
import styles from "./TopBar.module.scss";
import { useRouter } from "next/navigation";
import { useProductContext } from "@/context/products/products.context";

const TopBar = () => {
  const { cartItems } = useProductContext();
  const router = useRouter();

  return (
    <nav className={styles.topBar}>
      <div className={styles.container}>
        <div onClick={()=> router.push(ROUTES.PRODUCT_CATALOG)} className={styles.logo}>
          Product Catalog
        </div>
        <div className={styles.navLinks}>
          <div onClick={()=> router.push(ROUTES.CART)} className={styles.link}>
            <div className={styles.cartIcon}>
              <div>Cart 🛒 {cartItems.length > 0 ? `(${cartItems.length})` : ""}</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
