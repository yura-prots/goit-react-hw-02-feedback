export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const feedbackNames = Object.keys(options);

  return feedbackNames.map(name => (
    <button type="button" key={name} name={name} onClick={onLeaveFeedback}>
      {name}
    </button>
  ));
};
