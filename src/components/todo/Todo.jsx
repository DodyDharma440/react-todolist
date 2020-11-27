/** @jsx jsx */
//import React from "react";
import { jsx, useTheme } from "@emotion/react";
import PropTypes from "prop-types";
//import styles from "./todo.module.css";
import * as styles from "./todo.styles";

const Todo = ({ text, completeTodo, index, isCompleted }) => {
  const theme = useTheme();
  return (
    <div css={styles.todo(theme)} onClick={() => completeTodo(index)}>
      <span css={styles.todoText(theme, isCompleted)}>{text}</span>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completeTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired
};

export default Todo;
