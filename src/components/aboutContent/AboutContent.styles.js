import { css } from "@emotion/react";

export const aboutPageHeader = () => {
  return css`
    font-size: 24px;
  `;
};

export const aboutPageSubHeader = () => {
  return css`
    font-size: 16px;
  `;
};

export const aboutPageParagraph = (theme) => {
  return css`
    padding: 0px 16px;
    line-height: 1.6;
    font-size: 16px;
    color: ${theme.color.primary.black};
  `;
};

export const backToHome = () => {
  return css`
    font-weight: bold;
    font-size: 14px;
  `;
};
