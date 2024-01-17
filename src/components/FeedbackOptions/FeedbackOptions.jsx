import PropTypes from 'prop-types';

import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const feedbackNames = Object.keys(options);

  return feedbackNames.map(name => (
    <Button type="button" key={name} name={name} onClick={onLeaveFeedback}>
      {name}
    </Button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
