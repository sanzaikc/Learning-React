import React, { Component } from "react";
import MusicMasterArtist from "./MusicMasterArtist";
import MusicMasterTrack from "./MusicMasterTrack";

const API_ADDRESS = "https://spotify-api-wrapper.appspot.com";

class MusicMaster extends Component {
  state = { artistQuery: "", artist: null, tracks: [] };

  updateQuery = event => {
    this.setState({ artistQuery: event.target.value });
  };

  searchArtist = () => {
    fetch(`${API_ADDRESS}/artist/${this.state.artistQuery}`)
      .then(response => response.json())
      .then(json => {
        if (json.artists.total > 0) {
          const artist = json.artists.items[0];

          this.setState({ artist });

          fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
            .then(response => response.json())
            .then(json => this.setState({ tracks: json }))
            .catch(error => alert(error.message));
        } else alert("Artist not Found");
      })
      .catch(error => alert(error.message));
  };

  handleKeyPress = event => {
    if (event.key === "Enter") this.searchArtist();
  };

  render() {
    return (
      <div>
        <h2>Music Master</h2>
        <input
          type="text"
          onChange={this.updateQuery}
          onKeyPress={this.handleKeyPress}
          placeholder="Search something here"
        />
        <button onClick={this.searchArtist} className="button">
          Search
        </button>
        <MusicMasterArtist artist={this.state.artist} />
        <MusicMasterTrack tracks={this.state.tracks} />
      </div>
    );
  }
}

export default MusicMaster;
