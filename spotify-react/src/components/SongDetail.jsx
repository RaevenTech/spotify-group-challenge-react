import "../customCssFile.css";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  addToFavourite,
  removeFromFavouriteSongs,
} from "../slice/favouriteSongs/favouriteSongSlice.js";

const mapStateToProps = (state) => {
  return {
    song: state.addSongToPlayer.playingSong,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToFavourite: (song) => {
      dispatch(addToFavourite(song));
    },
    removerFromFav: (songId) => {
      dispatch(removeFromFavouriteSongs(songId));
    },
  };
};

const SongDetail = ({ song, addToFavourite, removerFromFav }) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(false);
  }, [song]);

  const addingSelectedPropertyToSong = (song) => {
    const newSong = {
      ...song,
      isSongSelected: true,
    };
    addToFavourite(newSong);
    setSelected(true);
  };

  const removeSelectedPropertyToSong = (song) => {
    console.log(song.id);
    removerFromFav(song.id);
    setSelected(false);
  };
  console.log(song);
  return (
    <>
      <div className="floatingDIv">
        <div className="wrapperMusic">
          <div>
            <img src={song.preview} />
          </div>
          <div>
            <p>{song.title_short}</p>
            <p>{song.artist.name}</p>
          </div>
          {/*  <div>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </div> */}
          {selected ? (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                removeSelectedPropertyToSong(song);
              }}
              className="svgs"
            >
              <svg
                color="red"
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="46"
                fill="currentColor"
                class="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            </div>
          ) : (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                addingSelectedPropertyToSong(song);
              }}
              className="svgs"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="46"
                fill="currentColor"
                class="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SongDetail);
