const { createSlice } = require("@reduxjs/toolkit");

const Initial_State = { items: [], totalAmount: 0, totalCount: 0 };

const refreshItems = (state) => {
  state.totalAmount = 0;
  state.totalCount = 0;
  state.items.map((item) => {
    state.totalCount += item.count;
    state.totalAmount +=
      item.priceWithDiscount !== 0
        ? item.priceWithDiscount * item.count
        : item.price * item.count;
  });
  return state;
};

const shoppingCardSlice = createSlice({
  name: "shoppingCard",
  initialState: Initial_State,
  reducers: {
    addItem(state, action) {
      state.items.push({ ...action.payload, count: 1 });
      return refreshItems(state);
    },
    removeItem(state, action) {
      state = {
        items: state.items.filter((item) => item.id != action.payload),
      };
      return refreshItems(state);
    },
    increaseItem(state, action) {
      state.items.map((item) => {
        if (item.id === action.payload) {
          item.count++;
        }
      });
      return refreshItems(state);
    },
    decreaseItem(state, action) {
      state.items.map((item) => {
        if (item.id === action.payload) {
          item.count--;
        }
      });
      return refreshItems(state);
    },
  },
});

export const { addItem, removeItem, increaseItem, decreaseItem } =
  shoppingCardSlice.actions;
export default shoppingCardSlice.reducer;
