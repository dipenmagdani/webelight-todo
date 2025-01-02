import React from "react";

const AddTask = () => {
  return (
    <div className="mt-10 ">
      <input
        type="text"
        placeholder="Add a Task"
        className="bg-black p-2 w-96 rounded-tl-2xl rounded-bl-2xl text-white "
      />
      <button className=" bg-white text-black p-2 w-24 rounded-tr-2xl rounded-br-2xl hover:bg-white/80 hover:border-none ">
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
