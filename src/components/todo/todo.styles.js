import { css } from "@emotion/react";

export const todo = (theme) => {
  return css`
    position: relative;
    flex: 1 0 auto;
    text-align: center;
    max-height: 40px;
    margin: 16px 0 0;
    font-size: 24px;
    border-bottom: 1px solid ${theme.color.primary.red};
  `;
};

export const todoText = (theme, isCompleted) => {
  return css`
    width: 100%;
    height: 50px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    color: ${theme.color.primary.black};
    text-decoration: ${isCompleted ? "line-through" : "initial"};
  `;
};
