import React, { createContext, useEffect, useState } from "react";

export const TodoContext = createContext(null);
export const TodoProvider = (props) => {
  const [todoContent, setTodoContent] = useState("");
  const [todoList, setTodoList] = useState(() => {
    const storedTodo = localStorage.getItem("todos");
    return storedTodo ? JSON.parse(storedTodo) : [];
  });

  const [isEdit, setIsEdit] = useState(false);
  //   useEffect(() => {
  //     localStorage.setItem("todos", JSON.stringify(todoList));
  //   }, [todoList]);

  const handleInputChange = (e) => {
    setTodoContent(e.target.value);
  };

  const handleAddButton = () => {
    if (todoContent.trim() === "") {
      window.alert("Task content cannot be empty");
      return;
    }
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

  const handleEdit = (e, id) => {
    setIsEdit(true);
    console.log(id);
    console.log(e);
  };

  return (
    <TodoContext.Provider
      value={{
        handleAddButton,
        todoContent,
        todoList,
        handleDelete,
        handleInputChange,
        handleEdit,
        isEdit,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
