import React from "react";

function Counter(props) {
  const { counter, onAdd, onRemove, onDelete } = props;

  function getBadgeClass(props) {
    return counter.value <= 0 ? "bg-red-600" : "bg-green-600";
  }

  return (
    <div className="block">
      <span
        className={`inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 ${getBadgeClass(
          props
        )} rounded-full`}
      >
        {counter.value}
      </span>
      <button
        onClick={() => onAdd(counter.id)}
        className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-green-500 rounded-lg focus:shadow-outline hover:bg-green-800 m-5"
      >
        <span className="mr-2">ADD</span>
      </button>
      <button
        onClick={() => onRemove(counter.id)}
        className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-yellow-500 rounded-lg focus:shadow-outline hover:bg-yellow-800 m-5"
      >
        <span className="mr-2">REMOVE</span>
      </button>
      <button
        onClick={() => onDelete(counter.id)}
        className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-800 m-5"
      >
        <span className="mr-2">DELETE</span>
      </button>
    </div>
  );
}

export default Counter;
