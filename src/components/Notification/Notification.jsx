import PropTypes from 'prop-types';

const Notification = ({ message = 'nobody left you a message' }) => {
  return <div>{message && <h3>{message}</h3>}</div>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
