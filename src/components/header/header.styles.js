import { css } from "@emotion/react";

export const header = () => {
  return css`
    display: flex;
    align-items: flex-start;
  `;
};

export const headerTitle = (theme) => {
  return css`
    width: 52%;
    text-align: center;
    font-size: 3.6rem;
    color: ${theme.color.primary.black};
  `;
};
