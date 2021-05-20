import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import apiClient from "api";
import type { AppDispatch, RootState } from "store";
import { Product } from "store/types/products";

// Define a type for the slice state
interface ProductsState {
  fetching: boolean;
  error: boolean;
  items: Product[];
}

// Define the initial state using that type
const initialState: ProductsState = {
  fetching: false,
  error: false,
  items: [],
};

export const productsSlice = createSlice({
  name: "products",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    fetching: (state, action: PayloadAction) => {
      state.fetching = true;
    },
    success: (state, action: PayloadAction) => {},
    failure: (state, action) => {
      state.error = true;
      state.fetching = false;
    },
  },
});

export const { fetching, success, failure } = productsSlice.actions;

export const selectCharactors = (state: RootState) => state.products;

export default productsSlice.reducer;

export const fetchCharacters =
  (page: number) => async (dispatch: AppDispatch) => {
    dispatch(productsSlice.actions.fetching());
    try {
      const response = await apiClient.get("/", {
        params: {
          page,
        },
      });

      dispatch(productsSlice.actions.success());
    } catch (e) {
      dispatch(productsSlice.actions.failure);
    }
  };
