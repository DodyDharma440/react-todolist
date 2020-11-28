import { css } from "@emotion/react";

export const todoPlaceholderText = (theme) => {
  return css`
    font-size: 24px;
    text-align: center;
    padding: 16px;
    color: ${theme.color.primary.black};
  `;
};

export const addButtonPlaceholderText = (theme) => {
  return css`
    font-size: 24px;
    font-weight: bold;
    color: ${theme.color.primary.black};
  `;
};
