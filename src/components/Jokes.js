import React, { Component } from "react";

class Jokes extends Component {
  state = { joke: {}, moreJokes: [] };

  componentDidMount() {
    fetch("https://official-joke-api.appspot.com/random_joke ")
      .then(response => response.json())
      .then(json => this.setState({ joke: json }));

    this.jokeInterval = setInterval(() => {
      fetch("https://official-joke-api.appspot.com/random_joke ")
        .then(response => response.json())
        .then(json => this.setState({ joke: json }))
        .catch(error => alert(error.message));
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.jokeInterval);
  }

  fetchJokes = () => {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then(response => response.json())
      .then(json => this.setState({ moreJokes: json }))
      .catch(error => alert(error.message));
  };

  render() {
    const { setup, punchline } = this.state.joke;
    return (
      <div>
        <h2>Joke-Section!</h2>
        <p>
          {setup} <em>- {punchline}</em>
        </p>
        <hr />
        <h4>Want more jokes, like 10 more?</h4>
        {this.state.moreJokes.map(joke => {
          const { setup, punchline, id } = joke;
          return (
            <p key={id}>
              {setup} - <em>{punchline}</em>
            </p>
          );
        })}
        <button className="button" onClick={this.fetchJokes}>
          Click here!
        </button>
      </div>
    );
  }
}

export default Jokes;
