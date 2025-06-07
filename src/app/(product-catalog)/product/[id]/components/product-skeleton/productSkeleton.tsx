import React from 'react'
import styles from './productSkeleton.module.scss'

const ProductSkeleton = () => {
  return (
    <div className={styles.productSkeleton}>
        <div className={styles.imageSkeleton} />
        <div className={styles.titleSkeleton} />
        <div className={styles.priceSkeleton} />
        <div className={styles.buttonSkeleton} />
    </div>
  )
}

export default ProductSkeleton
