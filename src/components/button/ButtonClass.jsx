import React from "react";
import styled from "@emotion/react";
import PropTypes from "prop-types";
import { withTheme } from "@emotion/react";

const StyledButton = styled.button`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${(props) => props.textColor};
  text-align: ${(props) => props.align};
  padding: 24px;
  background: unset;
  border: unset;
  outline: unset;
  cursor: pointer;
  &:active {
    text-shadow: 1px 2px 2px ${(props) => props.textColor};
  }
`;

class Button extends React.Component {
  render() {
    const { text, onClick, color, align, theme } = this.props;

    const {
      color: { primary }
    } = theme;

    let textColor;

    switch (color) {
      case "black":
        textColor = primary.black;
        break;
      case "red":
        textColor = primary.red;
        break;
      default:
        textColor = primary.black;
    }
    switch (color) {
      case "black":
        textColor = primary.black;
        break;
      case "red":
        textColor = primary.red;
        break;
      default:
        textColor = primary.black;
    }

    return (
      <StyledButton textColor={textColor} align={align} onClick={onClick}>
        {text}
      </StyledButton>
    );
  }

  static defaultProps = {
    text: "Button",
    color: "black",
    align: "left"
  };

  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(["black", "red"]),
    align: PropTypes.oneOf(["left", "right"])
  };
}

export default withTheme(Button);
