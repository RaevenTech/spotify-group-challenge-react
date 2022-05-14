import React from "react";
import { connect } from "react-redux";

import { addToPlayer } from "../slice/addToPlayer/addToPlayerSlice.js";
import { addToQueue } from "../slice/addToQueue/addToQueueSlice.js";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSongToPlayer: (song) => {
      dispatch(addToPlayer(song));
    },
    addSongToQueue: (song) => {
      dispatch(addToQueue(song));
    },
  };
};

const Song = ({ track, addSongToPlayer, addSongToQueue }) => {
  return (
    <>
      <div className="py-3 trackHover">
        <span
          className="card-title trackHover px-3"
          style={{ color: "white" }}
          onClick={() => {
            addSongToPlayer(track);
          }}
        >
          {track.title}
        </span>
        <small className="duration" style={{ color: "white" }}>
          <button
            onClick={() => {
              addSongToQueue(track);
            }}
          >
            add to queue
          </button>
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
