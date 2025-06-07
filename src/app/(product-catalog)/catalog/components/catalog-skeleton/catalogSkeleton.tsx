import React from 'react';
import styles from './catalogSkeleton.module.scss';

const CatalogSkeleton = () => {
  const skeletonItems = Array(8).fill(null);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.grid}>
        {skeletonItems.map((_, index) => (
          <div key={index} className={styles.skeletonCard}>
            <div className={styles.imageSkeleton} />
            <div className={styles.contentSkeleton}>
              <div className={styles.titleSkeleton} />
              <div className={styles.priceSkeleton} />
              <div className={styles.buttonSkeleton} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogSkeleton; 