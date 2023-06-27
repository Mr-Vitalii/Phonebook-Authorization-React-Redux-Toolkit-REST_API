import PropTypes from "prop-types";
import { Container, Title } from "./Section.styled";

const Section = ({ message, children }) => {
  return (
    <Container>
      <Title>{message}</Title>
      {children}
    </Container>
  );
};

Section.propTypes = {
  message: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export { Section };
