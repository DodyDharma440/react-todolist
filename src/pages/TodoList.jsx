import React, { useState } from "react";

//Components
import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Belajar React1" },
    { text: "Belajar React2" },
    { text: "Belajar React3" }
  ]);
  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;