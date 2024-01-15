import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const feedbackNames = Object.keys(options);

  return feedbackNames.map(name => (
    <Button type="button" key={name} name={name} onClick={onLeaveFeedback}>
      {name}
    </Button>
  ));
};
