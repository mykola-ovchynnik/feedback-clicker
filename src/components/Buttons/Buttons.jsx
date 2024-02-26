const { ButtonListWrapper, Button } = require('./Buttons.styled');

const FeedbackButtons = ({ options, onFeedback }) => {
  return (
    <ButtonListWrapper>
      {options.map(option => (
        <Button key={option} type="button" onClick={() => onFeedback(option)}>
          {option}
        </Button>
      ))}
    </ButtonListWrapper>
  );
};

export default FeedbackButtons;
