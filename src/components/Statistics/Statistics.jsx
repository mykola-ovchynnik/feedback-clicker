import { StatisticsList, StaticsItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsList>
      <StaticsItem>Good: {good}</StaticsItem>
      <StaticsItem>Neutral: {neutral}</StaticsItem>
      <StaticsItem>Bad: {bad}</StaticsItem>
      <StaticsItem>Total: {total}</StaticsItem>
      <StaticsItem>Positive feedback: {positivePercentage}&#37;</StaticsItem>
    </StatisticsList>
  );
};

export default Statistics;
