import { Component } from 'react';
import { Container } from 'components/Container/Container.styled';
import Section from 'components/Section/Section';
import FeedbackButtons from 'components/Buttons/Buttons';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedback = param => {
    this.setState(prevState => ({ [param]: prevState[param] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = (good, totalFeedback) => {
    return Math.round((good / totalFeedback) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackButtons options={options} onFeedback={this.onFeedback} />
        </Section>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={this.countPositiveFeedbackPercentage(
              good,
              total
            )}
          ></Statistics>
        ) : (
          <Notification text="There is no feedback" />
        )}
      </Container>
    );
  }
}

export default App;
