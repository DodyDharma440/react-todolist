import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { withTheme } from "@emotion/react";

import Todo from "../todo/TodoClass";
import Container from "../../layout/Container";

const StyledTodoPlaceholderText = styled.div`
  font-size: 24px;
  text-align: center;
  padding: 16px;
  color: ${(props) => props.theme.color.primary.black};
`;

const StyledAddButtonPlaceholderText = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.color.primary.black};
`;

class Todos extends React.Component {
  render() {
    const { todos, completeTodo, theme } = this.props;

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
            <StyledTodoPlaceholderText theme={theme}>
              {[
                "Tambahkan todo dengan klik tombol ",
                <StyledAddButtonPlaceholderText theme={theme}>
                  Add
                </StyledAddButtonPlaceholderText>,
                " yang ada di pojok kiri atas."
              ]}
            </StyledTodoPlaceholderText>
          )}
        </Container>
      </section>
    );
  }

  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string
      })
    ),
    completeTodo: PropTypes.func.isRequired
  };
}

export default withTheme(Todos);
