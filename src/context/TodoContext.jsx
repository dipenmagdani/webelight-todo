import React, { createContext, useEffect, useRef, useState } from "react";

export const TodoContext = createContext(null);
export const TodoProvider = (props) => {
  const [todoContent, setTodoContent] = useState("");
  const [todoList, setTodoList] = useState(() => {
    const storedTodo = localStorage.getItem("todos");
    return storedTodo ? JSON.parse(storedTodo) : [];
  });
  const [isCompleted, setIsCompleted] = useState(false);
  const [tempContent, setTempContent] = useState("");
  const inputRef = useRef(null);

  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEdit]);

  const handleInputChange = (e) => {
    console.log(e.target.value);
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
      completed: false,
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

  const handleEditInputChange = (e) => {
    console.log(e.target.value);
    setTempContent(e.target.value);
  };
  const handleEdit = () => {
    alert("Pending");
    // setIsEdit(true);
  };

  const handleFinalEdit = (id) => {
    // console.log(content);
    setTodoList(() => {
      const content = todoList.find((todo) => todo.id === id);
      const updatedTodo = {
        id: content.id,
        content: tempContent,
      };
      localStorage.setItem("todos", JSON.stringify(updatedTodo));
    });
    setIsEdit(false);
  };

  const handleMarkAsCompleted = (id) => {
    const completedValue = todoList.map((todo) => todo.id === id);
    setIsCompleted(completedValue);
    setTodoList((prevTodo) => {
      const updatedTodo = prevTodo.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodo));
      return updatedTodo;
    });
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
        handleEditInputChange,
        tempContent,
        inputRef,
        handleFinalEdit,
        handleMarkAsCompleted,
        isCompleted,
        setTodoList,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
