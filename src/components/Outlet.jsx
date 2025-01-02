import React, { useContext, useEffect } from "react";
import Title from "./Title";
import AddTask from "./AddTask";
import TodoCard from "./TodoCard";
import TodoContext from "../context/TodoContext";

const Outlet = () => {
  const { todoList } = useContext(TodoContext);

  useEffect(() => {
    const todo = localStorage.getItem("todos");
    const parsedTodo = todo ? JSON.parse(todo) : [];
    console.log(parsedTodo);
  }, [todoList]);
  return (
    <div>
      <Title />
      <AddTask />
      <TodoCard />
    </div>
  );
};

export default Outlet;
