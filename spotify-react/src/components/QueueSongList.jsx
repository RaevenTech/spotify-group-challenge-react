import React from "react";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { removeFromQueue } from "../slice/addToQueue/addToQueueSlice";

const mapStateToProps = (state) => {
  return {
    songQueue: state.addSongToQueue.songsInQueue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeSong: (song) => {
      dispatch(removeFromQueue(song));
    },
  };
};

const QueueSongList = ({ songQueue, removeSong }) => {
  console.log(songQueue);
  // console.log(removeSong);
  return (
    <Row>
      <div className="col-md-10 mb-5" id="trackList">
        {songQueue.map((song, i) => (
          <div className="py-3 trackHover" key={song.id}>
            <span
              className="card-title trackHover px-3"
              style={{ color: "white" }}
            >
              {song.title}
            </span>
            <button variant="danger" onClick={() => removeSong(song.id)}>
              <FaTrash />
            </button>
            <small className="duration" style={{ color: "white" }}>
              {Math.floor(parseInt(song.duration) / 60)}:
              {parseInt(song.duration) % 60 < 10
                ? "0" + (parseInt(song.duration) % 60)
                : parseInt(song.duration) % 60}
            </small>
          </div>
        ))}
      </div>
    </Row>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(QueueSongList);
