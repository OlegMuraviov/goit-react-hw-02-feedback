import s from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div>
      {title && <h1 className={s.title}>{title}</h1>}
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
export default Section;
