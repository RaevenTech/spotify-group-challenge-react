import { configureStore } from "@reduxjs/toolkit";
import favouriteSongReducer from "../slice/favouriteSongs/favouriteSongSlice";
import addToPlayerReducer from "../slice/addToPlayer/addToPlayerSlice";
import addToQueueReducer from "../slice/addToQueue/addToQueueSlice";

export default configureStore({
    reducer: {
        addSongToFavourite: favouriteSongReducer, // []
        addSongToPlayer: addToPlayerReducer,  // {}
        addSongToQueue: addToQueueReducer // []
    },
});
