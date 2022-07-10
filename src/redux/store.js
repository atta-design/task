import { configureStore } from "@reduxjs/toolkit";
import BasketReducer from "./basketReducer";

export const store = configureStore({
    reducer: {
        products: BasketReducer
    },
  });
  