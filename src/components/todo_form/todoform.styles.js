import { css } from "@emotion/react";

export const add = () => {
  return css`
    padding: 15px;
  `;
};

export const addForm = () => {
  return css`
    display: flex;
    align-items: flex-start;
  `;
};

export const addInput = (theme) => {
  return css`
    background: unset;
    border: unset;
    padding: 0 64px;
    flex: 1;
    border-bottom: 1px solid ${theme.color.primary.red};
    outline: unset;
    font-size: 16px;
    text-transform: lowercase;
  `;
};

export const addBtn = (theme) => {
  return css`
    font-size: 1.8rem;
    padding: 15px;
    padding-right: unset;
    padding-top: 0;
    cursor: pointer;
    background: unset;
    outline: unset;
    border: unset;
    color: ${theme.color.primary.black};
    &:active {
      text-shadow: 1px 2px 2px ${theme.color.primary.black};
    }
  `;
};
