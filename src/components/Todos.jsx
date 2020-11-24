import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar 1"
    },
    {
      text: "Belajar 2"
    },
    {
      text: "Belajar 3"
    },
    {
      text: "Belajar 4"
    },
    {
      text: "Belajar 5"
    },
    {
      text: "Belajar 1"
    },
    {
      text: "Belajar 2"
    },
    {
      text: "Belajar 3"
    },
    {
      text: "Belajar 4"
    },
    {
      text: "Belajar 5"
    }
  ];

  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
