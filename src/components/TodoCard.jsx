import React, { useContext, useEffect } from "react";
import { Pencil, Trash2 } from "lucide-react";
import TodoContext from "../context/TodoContext";
import { CheckIcon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { CheckSquare } from "lucide-react";
const TodoCard = () => {
  const {
    handleDelete,
    handleEdit,
    isEdit,
    todoContent,
    handleEditInputChange,
    tempContent,
    handleFinalEdit,
    inputRef,
    isCompleted,
    setTodoList,
    todoList,
    handleMarkAsCompleted,
  } = useContext(TodoContext);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodoList(storedTodos);
    }
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="w-[370px] lg:w-full  h-[550px] border border-zinc-700 p-2 mt-5 overflow-y-auto rounded-xl no-scrollbar bg-zinc-800 bg-opacity-40">
        {todoList.length > 0 ? (
          todoList.map((todo) => (
            <div
              className={`mt-6 border border-white/20  rounded-full  flex items-center justify-between bg-black bg-opacity-40 shadow-lg  shadow-black/40 ${
                isCompleted ? "disabled" : ""
              }`}
              key={todo.id}
            >
              {isEdit ? (
                <input
                  type="text"
                  className="text-stone-100 pl-4 text-xl max-w-md w-full h-20 flex justify- items-center bg-transparent outline-none "
                  onChange={(e) => handleEditInputChange(e)}
                  value={tempContent}
                  ref={inputRef}
                />
              ) : (
                <h2
                  className={`text-stone-100 pl-4 text-xl max-w-md w-full h-20 flex justify-start items-center todo-content ${
                    isCompleted ? "line-through" : null
                  }`}
                >
                  {todo.content}
                </h2>
              )}
              <div className="flex space-x-3 mr-4">
                {isEdit ? (
                  <button
                    className="bg-amber-50 rounded-full p-2 cursor-pointer hover:bg-white/80 shadow-md shadow-black"
                    onClick={() => handleFinalEdit(todo.id)}
                    // onClick={() => console.log(todoData)}
                  >
                    <CheckIcon />
                  </button>
                ) : (
                  <button
                    className="bg-amber-50 rounded-full p-2 cursor-pointer hover:bg-white/80 shadow-md shadow-black"
                    onClick={() => handleEdit(todo.id)}
                    // onClick={() => console.log(todoData)}
                  >
                    <Pencil />
                  </button>
                )}
                <button
                  className="bg-amber-50 rounded-full p-2 cursor-pointer hover:bg-white/80 shadow-md shadow-black"
                  onClick={() => handleDelete(todo.id)}
                >
                  <Trash2 />
                </button>
                <button
                  className="bg-amber-50 rounded-full p-2 cursor-pointer hover:bg-white/80 shadow-md shadow-black"
                  onClick={() => handleMarkAsCompleted(todo.id)}
                >
                  <CheckSquare />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="mt-6 h-14 flex justify-center items-center bg-black bg-opacity-40 ">
            <h2 className="text-stone-100 pl-4 text-lg lg:text-xl">
              Your List is empty. Add a task now!
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoCard;
