import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import Notification from 'components/Notification/Notification';

const Statistics = ({
  statisticsOptions,
  countOfFeedback,
  total,
  positivePercentage,
}) => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Statistic</h1>
      {!total ? (
        <Notification message="There is no feedback" />
      ) : (
        <ul className={s.list}>
          {statisticsOptions.map(option => {
            return (
              <li key={option.id} className={s.item}>
                {option.title}: {countOfFeedback[option.id]}
              </li>
            );
          })}
          <li className={s.item}>Total: {total}</li>
          <li className={s.item}>
            Positive Feedback: {positivePercentage.toFixed(2)} %
          </li>
        </ul>
      )}
    </div>
  );
};

Statistics.propTypes = {
  statisticsOptions: PropTypes.array.isRequired,
  countOfFeedback: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
