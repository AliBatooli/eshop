const { createSlice } = require("@reduxjs/toolkit");

const Initial_State = { token: "" };
const usersSlice = createSlice({
  name: "user",
  initialState: Initial_State,
  reducers: {
    setJwtToken(state, action) {
      state.token = action.payload;
    },
    removeToken(state) {
      state.token = "";
    },
  },
});

export const { setJwtToken, removeToken } = usersSlice.actions;
export default usersSlice.reducer;
