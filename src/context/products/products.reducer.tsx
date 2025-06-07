import { ProductDTO } from "@/data/types/products/products.types";

export interface ProductState {
    products: ProductDTO[];
    productDetails: ProductDTO | null;
    isLoading: boolean;
    isDetailsLoading: boolean;
    error: string | null;
}

export const initialState: ProductState = {
    products: [],
    isLoading: false,
    error: null,
    productDetails: null,
    isDetailsLoading: false,
}

export type ProductAction = {
    type: "SET_PRODUCTS";
    payload: ProductDTO[];
} | {
    type: "SET_PRODUCT_DETAILS";
    payload: ProductDTO;
} | {
    type: "SET_LOADING";
    payload: boolean;
} | {
    type: "SET_ERROR";
    payload: string;
} | {
    type: "SET_DETAILS_LOADING";
    payload: boolean;
}

export const productsReducer = (state: ProductState, action: ProductAction) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return { ...state, products: action.payload };
        case "SET_PRODUCT_DETAILS":
            return { ...state, productDetails: action.payload };
        case "SET_LOADING":
            return { ...state, isLoading: action.payload };
        case "SET_ERROR":
            return { ...state, error: action.payload };
        case "SET_DETAILS_LOADING":
            return { ...state, isDetailsLoading: action.payload };
        default:
            return state;
    }
}