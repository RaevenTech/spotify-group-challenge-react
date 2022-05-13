import { createSlice } from "@reduxjs/toolkit";

let defaultState = {
/*   playingSong: {}, */
  songsInQueue: [],
};

const addToQueueSlice = createSlice({
  name: "addToQueue",
  initialState: defaultState,

  reducers: {
   addToQueue: (state,action)=>{

        return{
            ...state,
            songsInQueue: [...state.songsInQueue, action.payload]
        }
    },

    removeFromQueue : (state,action)=>{
        return {
            ...state,
            songsInQueue: state.songsInQueue.filter((song, i)=> song._id !== action.payload  )
        }
    }
  },
});

export default addToQueueSlice.reducer;
export const { addToQueue, removeFromQueue} = addToQueueSlice.actions;

