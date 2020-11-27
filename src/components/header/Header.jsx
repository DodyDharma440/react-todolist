/** @jsx jsx */
//import React from "react";
import { jsx, useTheme } from "@emotion/react";
import PropTypes from "prop-types";
//import styles from "./header.module.css";

import * as styles from "./header.styles";

import Button from "../button/Button";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();
  return (
    <section css={styles.header}>
      <Button
        text={showAdd ? "Finish" : "Add"}
        onClick={showAddToggle}
        align="left"
      />
      <h1 css={styles.headerTitle(theme)}>Todo Lists</h1>
      <Button text="Clear" color="red" onClick={clearTodos} align="right" />
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
