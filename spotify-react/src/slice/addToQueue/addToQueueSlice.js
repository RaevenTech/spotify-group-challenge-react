import { createSlice } from "@reduxjs/toolkit";

//let defaultState = {

//songsInQueue: [],
//};

const addToQueueSlice = createSlice({
  name: "addToQueue",
  initialState: {
    songsInQueue: [],
  },
  reducers: {
    addToQueue: (state, action) => {
      return {
        ...state,
        songsInQueue: [...state.songsInQueue, action.payload],
      };
    },

    removeFromQueue: (state, action) => {
      console.log(
        state.songsInQueue,
        action.payload,
        state.songsInQueue.some((song) => song.id === action.payload)
      );
      return {
        ...state,
        songsInQueue: state.songsInQueue.filter(
          (song, i) => song.id !== action.payload
        ),
      };
    },
  },
});

export default addToQueueSlice.reducer;
export const { addToQueue, removeFromQueue } = addToQueueSlice.actions;
