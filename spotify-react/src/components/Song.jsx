import React from "react";
import { connect } from "react-redux";
import { addToPlayer } from "../slice/addToPlayer/addToPlayerSlice.js";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSongToPlayer: (song) => {
      /*  */
      dispatch(addToPlayer(song));
    },
  };
};
/* 
const Song = ({ track, addSongToPlayer }) => (
  
 
); */

const Song = ({ track, addSongToPlayer }) => {

 console.log(addSongToPlayer);
  
  return (
    <>
      <div
        onClick={() => {
          addSongToPlayer(track);
        }}
        className="py-3 trackHover"
      >
        <span className="card-title trackHover px-3" style={{ color: "white" }}>
          {track.title}
        </span>
        <small className="duration" style={{ color: "white" }}>
          {Math.floor(parseInt(track.duration) / 60)}:
          {parseInt(track.duration) % 60 < 10
            ? "0" + (parseInt(track.duration) % 60)
            : parseInt(track.duration) % 60}
        </small>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Song);
