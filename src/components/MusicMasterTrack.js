import React, { Component } from "react";

class MusicMasterTrack extends Component {
  render() {
    const { tracks } = this.props;
    <h1></h1>;

    return (
      <div>
        {/* yah nira bigreko */}
        {tracks.map(track => {
          const { id, name, album } = track;
          return (
            <div key={id}>
              <img src={album.images[0]} alt="album" />
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MusicMasterTrack;
