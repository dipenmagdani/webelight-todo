import React, { createContext, useEffect, useState } from "react";

export const TodoContext = createContext(null);
export const TodoProvider = (props) => {
  const [todoContent, setTodoContent] = useState("");
  const [todoList, setTodoList] = useState(() => {
    const storedTodo = localStorage.getItem("todos");
    return storedTodo ? JSON.parse(storedTodo) : [];
  });
  //   useEffect(() => {
  //     localStorage.setItem("todos", JSON.stringify(todoList));
  //   }, [todoList]);
  const handleAddButton = () => {
    console.log(todoContent);
    const newTodo = {
      id: Date.now(),
      content: todoContent,
    };

    setTodoList((prevTodo) => {
      const updatedTodo = [newTodo, ...prevTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodo));
      return updatedTodo;
    });

    setTodoContent("");
  };

  const handleDelete = (id) => {
    const updatedTodo = todoList.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(updatedTodo));
    setTodoList(updatedTodo);
  };

  return (
    <TodoContext.Provider
      value={{ handleAddButton, setTodoContent, todoList, handleDelete }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
