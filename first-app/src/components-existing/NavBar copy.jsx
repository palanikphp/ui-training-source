import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import CartContext from "../context/CartContext";

function NavBar(props) {
  const [cartCount] = useContext(CartContext);

  return (
    <nav className="bg-black border-gray-200 px-2 sm:px-4 py-2.5 rounded relative dark:bg-gray-800 h-24">
      <div className="w-full md:block md:w-auto" id="mobile-menu">
        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "yellow" : "",
              })}
              className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent hover:text-yellow-500 md:p-0 dark:text-white"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/counters"
              style={({ isActive }) => ({
                color: isActive ? "yellow" : "",
              })}
              className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent hover:text-yellow-500 md:p-0 dark:text-white"
            >
              Counters
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              style={({ isActive }) => ({
                color: isActive ? "yellow" : "",
              })}
              className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent hover:text-yellow-500 md:p-0 dark:text-white"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </div>

      <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 absolute right-0 top-0 ">
        <span className="mr-2">Button</span>
        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
          {cartCount}
        </span>
      </button>
    </nav>
  );
}

export default NavBar;
