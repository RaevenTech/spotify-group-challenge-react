import { createSlice } from "@reduxjs/toolkit";

let defaultState = {
/*   playingSong: {}, */
  favouriteSongs: [],
};

const favouriteSongsSlice = createSlice({
  name: "favouriteSongs",
  initialState: defaultState,

  reducers: {
  /*   addToPlayer: (state, action) => {
      return {
        ...state,
        playingSong: action.payload
      };
    }, */

    addToFavourite: (state,action)=>{

        return{
            ...state,
            favouriteSongs: [...state.favouriteSongs, action.payload]
        }
    },

    removeFromFavouriteSongs : (state,action)=>{
    
        return {
            ...state,
            favouriteSongs: state.favouriteSongs.filter((song, i)=> song.id !== action.payload  )
        }
    }
  },
});

export default favouriteSongsSlice.reducer;
export const { addToFavourite, removeFromFavouriteSongs} = favouriteSongsSlice.actions;

