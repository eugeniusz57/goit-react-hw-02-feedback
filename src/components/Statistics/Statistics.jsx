import { SatatisticsList, SatatisticsListItems } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <SatatisticsList>
    <SatatisticsListItems>Good: {good}</SatatisticsListItems>
    <SatatisticsListItems>Neutral: {neutral}</SatatisticsListItems>
    <SatatisticsListItems>Bad: {bad}</SatatisticsListItems>
    <SatatisticsListItems>Total: {total}</SatatisticsListItems>
    <SatatisticsListItems>
      Positive feedback: {total ? Math.round(positivePercentage) + `%` : 0}
    </SatatisticsListItems>
  </SatatisticsList>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
