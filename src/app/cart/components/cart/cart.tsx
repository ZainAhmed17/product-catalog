"use client";
import React from "react";
import styles from "./cart.module.scss";
import CartProduct from "../product/product";
import { useProductContext } from "@/context/products/products.context";

const Cart = () => {
  const { cartItems, removeFromCart } = useProductContext();

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartTitle}>Cart</h1>
     {cartItems.length > 0 ? (
        cartItems.map((item) => (
        <CartProduct
          key={item.id}
          product={item}
          removeFromCart={removeFromCart}
        />
      ))
      ) : (
        <div className={styles.cartEmpty}>No items in cart</div>
      )}
    </div>
  );
};

export default Cart;
