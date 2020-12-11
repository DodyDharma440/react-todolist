import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { withTheme } from "@emotion/react";

const StyledTodo = styled.div`
  position: relative;
  flex: 1 0 auto;
  text-align: center;
  max-height: 40px;
  margin: 16px 0 0;
  font-size: 24px;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.red};
`;

const StyledTodoText = styled.span`
  width: 100%;
  height: 50px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  color: ${(props) => props.theme.color.primary.black};
  text-decoration: ${(props) =>
    props.isCompleted ? "line-through" : "initial"};
`;

class Todo extends React.Component {
  render() {
    const { text, completeTodo, index, isCompleted, theme } = this.props;
    return (
      <StyledTodo theme={theme} onClick={() => completeTodo(index)}>
        <StyledTodoText theme={theme} isCompleted={isCompleted}>
          {text}
        </StyledTodoText>
      </StyledTodo>
    );
  }

  static propTypes = {
    text: PropTypes.string.isRequired,
    completeTodo: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired
  };
}

export default withTheme(Todo);
