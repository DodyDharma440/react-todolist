import { css } from "@emotion/react";

export const button = ({ color, align }) => {
  let textColor;

  switch (color) {
    case "black":
      textColor = "#484848";
      break;
    case "red":
      textColor = "#e06262";
      break;
    default:
      textColor = "#484848";
  }

  return css`
    width: 24%;
    font-size: 1.8rem;
    font-weight: bold;
    color: ${textColor};
    text-align: ${align};
    padding: 24px;
    background: unset;
    border: unset;
    outline: unset;
    cursor: pointer;
  `;
};
