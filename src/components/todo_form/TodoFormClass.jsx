import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { withTheme } from "@emotion/react";

import Container from "../../layout/Container";
import Item from "../../layout/Item";
import Button from "../button/ButtonClass";

const StyledInput = styled.input`
  background: unset;
  border: unset;
  padding: 0 64px;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.red};
  outline: unset;
  font-size: 16px;
  text-transform: lowercase;
  width: 100%;
`;

class TodoForm extends React.Component {
  state = {
    value: ""
  };

  handleFormSubmit = (e) => {
    const { value } = this.state;
    const { addTodo } = this.props;
    e.preventDefault();
    if (!value) {
      alert("No Blank Todo");
      return;
    }

    if (value.length > 30) {
      alert("Karakter tidak boleh lebih dari 30!");
      this.setState({
        value: ""
      });
      return;
    }

    addTodo(value);
    this.setState({
      value: ""
    });
  };

  handleOnChange = (e) => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { showAdd, theme } = this.props;
    if (showAdd) {
      return (
        <section className="todoform-component">
          <form onSubmit={this.handleFormSubmit}>
            <Container alignItems="center">
              <Item flex={1} padding="0 0 0 16px">
                <StyledInput
                  theme={theme}
                  type="text"
                  value={this.state.value}
                  onChange={this.handleOnChange}
                />
              </Item>
              <Item>
                <Button text="Add" />
              </Item>
            </Container>
          </form>
        </section>
      );
    } else {
      return null;
    }
  }
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired
  };
}

export default withTheme(TodoForm);
