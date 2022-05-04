import { Component } from 'react';
import Section from './Section/Section';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';

const feedbackOptions = [
  { id: 'good', title: 'Good' },
  { id: 'neutral', title: 'Neutral' },
  { id: 'bad', title: 'Bad' },
];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = id => {
    this.setState(prevState => {
      return {
        [id]: prevState[id] + 1,
      };
    });
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, cur) => acc + cur);
  }

  countPositiveFeedbackPercentage() {
    return (100 / this.countTotalFeedback()) * this.state.good;
  }

  render() {
    return (
      <div>
        <Section>
          <Feedback
            onLeaveFeedback={this.onLeaveFeedback}
            feedbackOptions={feedbackOptions}
          />
          <Statistics
            statisticsOptions={feedbackOptions}
            countOfFeedback={this.state}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default App;
