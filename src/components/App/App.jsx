import { Container } from 'components/Container/Container.styled';
import Section from 'components/Section/Section';
import FeedbackButtons from 'components/Buttons/Buttons';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import { useState } from 'react';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const onFeedback = param => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [param]: prevFeedback[param] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = (good, totalFeedback) => {
    return Math.round((good / totalFeedback) * 100);
  };

  const total = countTotalFeedback();

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackButtons
          options={Object.keys(feedback)}
          onFeedback={onFeedback}
        />
      </Section>
      {total ? (
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage(
            feedback.good,
            total
          )}
        />
      ) : (
        <Notification text="There is no feedback" />
      )}
    </Container>
  );
};

export default App;
