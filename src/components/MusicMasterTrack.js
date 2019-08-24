import React, { Component } from "react";

class MusicMasterTrack extends Component {
  render() {
    const { tracks } = this.props;
    console.log("tracks:", tracks);

    return (
      <div className="cardContainer">
        {tracks.map(track => {
          const { id, name, album } = track;
          return (
            <div key={id} className="card">
              <img
                src={album.images[0].url}
                alt="albumArt"
                className="cardImage"
              />
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MusicMasterTrack;
