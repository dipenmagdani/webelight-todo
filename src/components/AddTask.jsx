import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";

const AddTask = () => {
  const { handleAddButton, setTodoContent } = useContext(TodoContext);
  return (
    <div className="mt-16">
      <input
        type="text"
        placeholder="Add a Task"
        className="bg-black p-2 w-96 rounded-tl-2xl rounded-bl-2xl text-white placeholder:text-white/30"
        onChange={(e) => setTodoContent(e.target.value)}
      />
      <button
        className="bg-white text-black p-2 w-24 rounded-tr-2xl rounded-br-2xl hover:bg-white/80 hover:border-none"
        onClick={handleAddButton}
      >
        Add Task!
      </button>
    </div>
  );
};

export default AddTask;
