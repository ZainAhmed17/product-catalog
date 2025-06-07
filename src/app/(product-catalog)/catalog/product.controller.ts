import { useProductContext } from "@/context/products/products.context";
import { getAllProducts, getProductDetails } from "@/data/api/products/products.api";
import { ProductDTO } from "@/data/types/products/products.types";

export const ProductController = () => {
  const {  dispatch } = useProductContext();

  const setLoading = (loading: boolean) => {
    dispatch({ type: "SET_LOADING", payload: loading });
  }

  const setError = (error: string) => {
    dispatch({ type: "SET_ERROR", payload: error });
  }

  const setProducts = (products: ProductDTO[]) => {
    dispatch({ type: "SET_PRODUCTS", payload: products });
  }

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data, error } = await getAllProducts();
      if (error) {
        setError(error as string);
      } else {
        setProducts(data as ProductDTO[]);
      }
      setLoading(false);
    } catch (error) {
      setError(error as string);
      setLoading(false);
    }
  };

  const setProductLoading = (loading: boolean) => {
    dispatch({ type: "SET_DETAILS_LOADING", payload: loading });
  }

  const setProductDetails = (product: ProductDTO) => {
    dispatch({ type: "SET_PRODUCT_DETAILS", payload: product });
  }

  const fetchProductById = async (id: string) => {
    setProductLoading(true);
    try {
      const { data, error } = await getProductDetails(id);
      if (error) {
        setError(error as string);
      } else {
        setProductDetails(data as ProductDTO);
      }
      setProductLoading(false);
    }catch(error){
      setError(error as string);
      setProductLoading(false);
    }
  }

  return {
    fetchProducts,
    fetchProductById
  };
};
