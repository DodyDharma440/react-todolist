import { css } from "@emotion/react";

export const button = ({ color, align, theme }) => {
  let textColor;

  const {
    color: { primary }
  } = theme;

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

  return css`
    font-size: 1.8rem;
    font-weight: bold;
    color: ${textColor};
    text-align: ${align};
    padding: 24px;
    background: unset;
    border: unset;
    outline: unset;
    cursor: pointer;
    &:active {
      text-shadow: 1px 2px 2px ${textColor};
    }
  `;
};
