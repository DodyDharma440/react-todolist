/** @jsx jsx */
import { jsx, useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

import Container from "../../layout/Container";
import Item from "../../layout/Item";

import * as styles from "./AboutContent.styles";

const AboutContent = () => {
  const theme = useTheme();
  return (
    <section className="about-page-content-component">
      <Container flexDirection="column">
        <Item align="center">
          <h1 css={styles.aboutPageHeader}>Tentang Aplikasi ini</h1>
          <h3 css={styles.aboutPageSubHeader}>Apa yang saya pelajari</h3>
        </Item>
        <Item>
          <Container>
            <p css={styles.aboutPageParagraph(theme)}>
              qpiwjedqpwksoqwkopsjkwspaw qqwijdeqwjdipjwqpdjpqwjdqw
              iohaqjwsdihwjqladwijdiowjd
            </p>
          </Container>
        </Item>
        <Item align="center">
          <Link to="/">
            <span css={styles.backToHome}>Kembali ke home</span>
          </Link>
        </Item>
      </Container>
    </section>
  );
};

export default AboutContent;
