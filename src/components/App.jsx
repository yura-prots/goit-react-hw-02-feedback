import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = e => {
    console.log(e.target.name);

    this.setState(prevState => {
      return { [e.target.name]: prevState[e.target.name] + 1 };
    });
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button type="button" name="good" onClick={this.addFeedback}>
          Good
        </button>
        <button type="button" name="neutral" onClick={this.addFeedback}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.addFeedback}>
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
      </div>
    );
  }
}

export default App;
