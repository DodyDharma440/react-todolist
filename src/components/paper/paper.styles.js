import { css } from "@emotion/react";

export const container = (theme) => {
  return css`
    width: 600px;
    height: 800px;
    background-color: ${theme.background.color.primary};
    border-radius: 4px;
    padding: 30px;
  `;
};

export const frame = (theme) => {
  return css`
    border: 1px solid ${theme.color.primary.black};
    height: 100%;
    /*display: flex;
    flex-direction: column;
    justify-content: space-between;*/
  `;
};
