import { createSlice } from "@reduxjs/toolkit";

let defaultState = {
  playingSong: {
      title_short: "",
      artist:{
          name:""
      }
  },
};

const addToPlayerSlice = createSlice({
  name: "favouriteSongs",
  initialState: defaultState,

  reducers: {
    addToPlayer: (state, action) => {
      return {
        ...state,
        playingSong: action.payload,
      };
    },
  },
});

export default addToPlayerSlice.reducer;
export const { addToPlayer } = addToPlayerSlice.actions;
