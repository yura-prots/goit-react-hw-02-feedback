import { Component } from 'react';

import { Statistics } from './Statistics/Statistics';

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
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback());
  }

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

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
      </div>
    );
  }
}

export default App;
