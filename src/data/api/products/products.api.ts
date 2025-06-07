import { customFetch } from "@/core/utils/api.utils";
import { ProductDTO } from "@/data/types/products/products.types";

export const getAllProducts = async (): Promise<{ data: ProductDTO[] | null, error: string | null }> => {
    const { data, error } = await customFetch("/products");
    return { data: data.products as ProductDTO[] | null, error: error as string | null };
}

export const getProductDetails = async (id: string): Promise<{ data: ProductDTO | null, error: string | null }> => {
    const { data, error } = await customFetch(`/products/${id}`);
    return { data: data as ProductDTO | null, error: error as string | null };
}