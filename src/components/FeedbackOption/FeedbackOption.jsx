import PropTypes from 'prop-types';
import s from './FeedbackOption.module.css';

const FeedbackOption = ({ id, title, onLeaveFeedback }) => {
  return (
    <li className={s.item}>
      <button
        className={s.button}
        onClick={e => {
          return onLeaveFeedback(e.target.id);
        }}
        id={id}
        type="button"
      >
        {title}
      </button>
    </li>
  );
};

FeedbackOption.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOption;
