import React, {useContext} from "react";

import Cart from "./Cart";
import CartContext from "./../context/CartContext";

function NavBar(props) {
  const [cartContext] = useContext(CartContext);
  
  return (
      <nav className="bg-black relative text-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 h-20">
        <div>Your First App</div>
        <div className="absolute top-0 right-0 ">
          <Cart currentCount={cartContext.currentCount} />
        </div>
      </nav>
 );
}

export default NavBar;
