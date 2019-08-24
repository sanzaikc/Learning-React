import React, { Component } from "react";

const TITLES = [
  "a IT student",
  "a weeb that likes to watch anime",
  "an enthusiastic learner",
  "a music lover"
];

class Titles extends Component {
  state = { titleIndex: 0, fadeIn: true };

  componentDidMount() {
    this.Timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
    // to animate between the Titles
    this.animateTitles();
  }

  componentWillUnmount() {
    // clear the interval after the component is unmounted
    clearInterval(this.titleInterval);
    clearTimeout(this.Timeout);
  }

  animateTitles() {
    this.titleInterval = setInterval(() => {
      const newtitleIndex = (this.state.titleIndex + 1) % TITLES.length;
      this.setState({ titleIndex: newtitleIndex, fadeIn: true });
      this.Timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
    }, 4000);
  }

  render() {
    const { fadeIn, titleIndex } = this.state;
    const title = TITLES[titleIndex];

    return (
      <p className={fadeIn ? "title-fade-in" : "title-fade-out"}>
        I am {title}
      </p>
    );
  }
}

export default Titles;
