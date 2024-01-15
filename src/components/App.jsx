import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = e => {
    const name = e.target.name;

    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback() {
    const total = this.state.good + this.state.neutral + this.state.bad;

    return total;
  }

  countPositiveFeedbackPercentage() {}

  render() {
    const { good, neutral, bad } = this.state;

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
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
      </div>
    );
  }
}

export default App;
