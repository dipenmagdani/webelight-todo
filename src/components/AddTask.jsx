import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";

const AddTask = () => {
  const { handleAddButton, todoContent, handleInputChange } =
    useContext(TodoContext);
  return (
    <div className="mt-16">
      <input
        type="text"
        value={todoContent}
        placeholder="Add a Task"
        className="bg-black p-2 w-96 lg:rounded-tl-2xl lg:rounded-bl-2xl text-white placeholder:text-white/30"
        onChange={(e) => handleInputChange(e)}
      />
      <button
        className="bg-white text-black p-2 w-24 mt-3  slg:rounded-tr-2xl lg:rounded-br-2xl hover:bg-white/80 hover:border-none"
        onClick={handleAddButton}
      >
        Add Task!
      </button>
    </div>
  );
};

export default AddTask;
