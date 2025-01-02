import React, { useContext } from "react";
import { Pencil, Trash2 } from "lucide-react";
import TodoContext from "../context/TodoContext";
const TodoCard = () => {
  const todos = localStorage.getItem("todos");
  const finalTodos = todos ? JSON.parse(todos) : [];

  const { handleDelete } = useContext(TodoContext);

  return (
    <>
      {finalTodos.length > 0 ? (
        finalTodos.map((todo) => (
          <div
            className="mt-6  border border-white/ w-[400px] rounded-full h-14 flex items-center justify-between bg-black bg-opacity-40"
            key={todo.id}
          >
            <h2 className="text-stone-100 pl-4 text-xl">{todo.content}</h2>
            <div className="flex space-x-3 mr-4">
              <button
                className="bg-amber-50 rounded-full p-2 cursor-pointer hover:bg-white/80 shadow-md shadow-black"
                // onClick={() => console.log(todoData)}
              >
                <Pencil />
              </button>
              <button
                className="bg-amber-50 rounded-full p-2 cursor-pointer hover:bg-white/80 shadow-md shadow-black"
                onClick={() => handleDelete(todo.id)}
              >
                <Trash2 />
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="mt-6  border border-white/ w-[400px] rounded-full h-14 flex items-center justify-between bg-black bg-opacity-40">
          <h2 className="text-stone-100 pl-4 text-xl">Empty Todo List</h2>
        </div>
      )}
    </>
  );
};

export default TodoCard;
