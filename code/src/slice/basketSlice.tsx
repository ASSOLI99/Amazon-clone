import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}
export interface BasketState {
  items: Product[] | [];
}
const initialState: BasketState = {
  items: [],
};
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    //Actions
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        //the item is exists in the list
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove the item with id: ${action.payload.id}, because it's not found`
        );
      }
      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const selectTotal = (state: RootState) =>
  //@ts-ignore
  state.basket.items.reduce((total: any, item: any) => total + item.price, 0);
export default basketSlice.reducer;
