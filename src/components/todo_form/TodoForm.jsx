/** @jsx jsx */
//import React from "react";
import { jsx, useTheme } from "@emotion/react";
import React from "react";
import PropTypes from "prop-types";
//import styles from "./todoform.module.css";
import * as styles from "./todoform.styles";

const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = React.useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      alert("No Blank Todo");
      return;
    }

    if (value.length > 30) {
      alert("Karakter tidak boleh lebih dari 30!");
      setValue("");
      return;
    }

    addTodo(value);
    setValue("");
  };

  const theme = useTheme();
  if (showAdd) {
    return (
      <section css={styles.add}>
        <form css={styles.addForm} onSubmit={handleFormSubmit}>
          <input
            type="text"
            css={styles.addInput(theme)}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button css={styles.addBtn(theme)}>Add</button>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default TodoForm;
