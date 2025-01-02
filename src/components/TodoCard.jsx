import React from "react";
import { Pencil, Trash2 } from "lucide-react";
const TodoCard = () => {
  return (
    <div className="mt-6  border border-white/50 w-[400px] rounded-full h-14 flex items-center justify-between bg-black bg-opacity-40">
      <h2 className="text-stone-100 pl-4 text-xl">Title of Todo</h2>
      <div className="flex space-x-3 mr-4">
        <button className="bg-amber-50 rounded-full p-2 cursor-pointer hover:bg-white/80 shadow-md shadow-black">
          <Pencil />
        </button>
        <div className="bg-amber-50 rounded-full p-2 cursor-pointer hover:bg-white/80 shadow-md shadow-black">
          <Trash2 />
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
