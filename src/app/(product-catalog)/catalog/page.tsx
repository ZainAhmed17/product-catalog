import CatalogMain from "./components/catalog-main/catalogMain";
import { getAllProducts } from "@/data/api/products/products.api";

const page = async () => {
  const productList = await getAllProducts();

  if (!productList.data) {
    return <div>No products found</div>;
  }

  return <CatalogMain products={productList.data} />;
};

export default page;
