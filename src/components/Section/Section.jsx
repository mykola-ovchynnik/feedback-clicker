const { Title, FeedbackSection } = require('./Section.styled');

const Section = ({ title, children }) => {
  return (
    <FeedbackSection>
      <Title>{title}</Title>
      {children}
    </FeedbackSection>
  );
};

export default Section;
