'use client';
import React, { useEffect } from 'react'
import { ProductController } from '../../catalog/product.controller';
import ProductDetails from './components/product-details/productDetails';
import { useProductContext } from '@/context/products/products.context';
import ProductSkeleton from './components/product-skeleton/productSkeleton';

const page = ({params}: {params: Promise<{id: string}>}) => {
  const resolvedParams = React.use(params);
  const { fetchProductById} = ProductController();
  const { state:{productDetails,isDetailsLoading} } = useProductContext();

  useEffect(() => {
    fetchProductById(resolvedParams.id);
  }, [resolvedParams.id]);

  if(isDetailsLoading){
    return <ProductSkeleton />;
  }

  return (
  
      productDetails && <ProductDetails productDetails={productDetails} />
  )
}

export default page
