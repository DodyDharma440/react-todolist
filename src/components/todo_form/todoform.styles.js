import { css } from "@emotion/react";

export const addInput = (theme) => {
  return css`
    background: unset;
    border: unset;
    padding: 0 64px;
    border-bottom: 1px solid ${theme.color.primary.red};
    outline: unset;
    font-size: 16px;
    text-transform: lowercase;
    width: 100%;
  `;
};
