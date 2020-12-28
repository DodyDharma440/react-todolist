/** @jsx jsx */
import React from "react";
import { jsx, useTheme } from "@emotion/react";
import Todo from "../todo/TodoClass";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Container from "../../layout/Container";
import Item from "../../layout/Item";

//import styles from "./todos.module.css";

import * as styles from "./todos.styles";

const Todos = ({ todos, completeTodo }) => {
  const theme = useTheme();
  return (
    <section className="todos-component">
      <Container flexDirection="column" minHeight="500px">
        {todos.length > 0 &&
          todos.map((todo, index) => {
            return (
              <Todo
                key={index}
                text={todo.text}
                isCompleted={todo.isCompleted}
                completeTodo={completeTodo}
                index={index}
              />
            );
          })}
        {todos.length === 0 && (
          <React.Fragment>
            <div css={styles.todoPlaceholderText(theme)}>
              Tambahkan todo dengan klik tombol{" "}
              <span css={styles.addButtonPlaceholderText(theme)}>Add</span> yang
              ada di pojok kiri atas.
            </div>
            <Container justifyContent="center">
              <Item>
                <span css={styles.seeAboutPagePlaceholderText}>
                  <Link to="/about">Tentang aplikasi ini</Link>
                </span>
              </Item>
            </Container>
          </React.Fragment>
        )}
      </Container>
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  completeTodo: PropTypes.func.isRequired
};

export default Todos;
