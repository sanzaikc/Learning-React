import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import profile from "../assets/profile.png";
import Titles from "./Title";

class App extends Component {
  state = { displayBio: false };
  // constructor() {
  //   super();
  //   this.state = { displayBio: false };

  //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  // }

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <img src={profile} alt="profile_pic" className="profile" />
        <br />
        <h1>Hello There!</h1>
        <p> My name is Sanjay.</p>
        <Titles />
        <p>I am looking forward to working on meaningfull projects.</p>
        {this.state.displayBio ? (
          <div>
            <p>I am learing this javascript framework right now.</p>
            <p>I'm trying hard to understand React.</p>
            <p>I like to sketch too.</p>
            <button className="button" onClick={this.toggleDisplayBio}>
              Show Less
            </button>
          </div>
        ) : (
          <button className="button" onClick={this.toggleDisplayBio}>
            Read more
          </button>
        )}

        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
