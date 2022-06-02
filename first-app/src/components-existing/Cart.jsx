import React from "react";

function Cart(props) {
  return (
    <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
      <span className="mr-2">Cart</span>
      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
        {props.currentCount}
      </span>
    </button>
  );
}

export default Cart;
