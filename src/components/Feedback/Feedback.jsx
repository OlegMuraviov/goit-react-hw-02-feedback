import PropTypes from 'prop-types';
import FeedbackOption from 'components/FeedbackOption/FeedbackOption';
import s from './Feedback.module.css';

const Feedback = ({ onLeaveFeedback, feedbackOptions }) => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Please leave feedback</h1>
      <ul className={s.list}>
        {feedbackOptions.map(element => {
          return (
            <FeedbackOption
              key={element.id}
              {...element}
              onLeaveFeedback={onLeaveFeedback}
            />
          );
        })}
      </ul>
    </div>
  );
};

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func,
  feedbackOptions: PropTypes.array.isRequired,
};
export default Feedback;
