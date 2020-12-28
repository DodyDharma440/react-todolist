import React, { useState } from "react";

import useStateWithLocalStorage from "../hooks/useStateWithLocalStorage";
//Components
import Paper from "../components/paper/Paper";
import Header from "../components/header/Header";
import TodoForm from "../components/todo_form/TodoForm";
import Todos from "../components/todos/Todos";

import Container from "../layout/Container";

const TodoList = () => {
  const [todos, setTodos] = useStateWithLocalStorage("todos");

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = (value) => {
    if (todos.length < 10) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];
      setTodos(addedTodo);
    } else {
      alert("Maksimal todo hanya 10");
    }
  };

  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;
    setTodos(addedTodo);
  };

  const clearTodos = () => !showAdd && setTodos([]);

  const showAddToggle = () => setShowAdd(!showAdd);

  return (
    <Paper>
      <Container
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <Header
          showAddToggle={showAddToggle}
          showAdd={showAdd}
          clearTodos={clearTodos}
        />
        <TodoForm showAdd={showAdd} addTodo={addTodo} />
        <Todos todos={todos} completeTodo={completeTodo} />
      </Container>
    </Paper>
  );
};

export default TodoList;
