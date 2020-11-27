import { css } from "@emotion/react";

export const todos = () => {
  return css`
    display: flex;
    flex-direction: column;
    min-height: 500px;
  `;
};

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
