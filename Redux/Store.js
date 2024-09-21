import { configureStore } from "@reduxjs/toolkit";
import shoppingCardReducre from "./features/shoppingCard/ShoppingCardSlice";

const Store = configureStore({
  reducer: {
    shoppingCard: shoppingCardReducre,
  },
});
export default Store;
