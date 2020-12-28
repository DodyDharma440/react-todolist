import React from "react";

import Paper from "../components/paper/PaperClass";
import Header from "../components/header/HeaderClass";
import TodoForm from "../components/todo_form/TodoFormClass";
import Todos from "../components/todos/TodosClass";

import Container from "../layout/Container";

class TodoList extends React.Component {
  state = {
    todos: [],
    showAdd: false
  };

  componentDidMount() {
    const todosStateLocalStorage =
      JSON.parse(localStorage.getItem("todos")) || [];

    const showAddLocalStorage =
      JSON.parse(localStorage.getItem("showAdd")) || false;

    this.setState({
      todos: todosStateLocalStorage,
      showAdd: showAddLocalStorage
    });
  }

  componentDidUpdate() {
    const { todos, showAdd } = this.state;
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("showAdd", JSON.stringify(showAdd));
  }

  addTodo = (value) => {
    const { todos } = this.state;

    if (todos.length < 10) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];

      this.setState({
        todos: addedTodo
      });
    } else {
      alert("Maksimal todo hanya 10!");
    }
  };

  completeTodo = (index) => {
    const { todos } = this.state;

    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    this.setState({
      todos: addedTodo
    });
  };

  clearTodos = () => {
    if (this.state.showAdd) {
      alert("Klik tombol Finish terlebih dahulu untuk menghapus todo!");
      return;
    }

    this.setState({
      todos: []
    });
  };

  showAddToggle = () => {
    this.setState((prevState) => ({ showAdd: !prevState.showAdd }));
  };

  render() {
    const { todos, showAdd } = this.state;
    return (
      <Paper>
        <Container
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <Header
            showAddToggle={this.showAddToggle}
            showAdd={showAdd}
            clearTodos={this.clearTodos}
          />
          <TodoForm showAdd={showAdd} addTodo={this.addTodo} />
          <Todos todos={todos} completeTodo={this.completeTodo} />
        </Container>
      </Paper>
    );
  }
}

export default TodoList;
