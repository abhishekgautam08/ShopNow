const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  items: [],
  total: 0,
};

const calculateTotals = (state) => {
  let total = 0;
  state.items.forEach((item) => {
    total = total + item.price;
  });
  state.total = total;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    ADD_TO_CART(state, action) {
      const items = state.items;
      state.items = items.concat({ ...action.payload });

      calculateTotals(state);
    },

    REMOVE_TO_CART(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      calculateTotals(state);
    },
    //   ADD_QUANTITY(state, action) {},

    // SUB_QUANTITY(state, action) {},
  },
});

export const { ADD_TO_CART, REMOVE_TO_CART } = cartSlice.actions;

export default cartSlice.reducer;
