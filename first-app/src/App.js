import React, { Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import CartContext from "./context/CartContext";

import Counters from "./compoents/Counters";
import NavBar from "./compoents/NavBar";
import MovieSearch from "./compoents/MovieSearch";
import MovieDetails from "./compoents/MovieDetails";
import MovieForm from "./compoents/MovieForm";

function App() {
  const [cartConext, setCartContext] = useState(0);

  return (
    <Fragment>
      <CartContext.Provider value={[cartConext, setCartContext]}>
        <NavBar />
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="counters" element={<Counters />} />
          <Route path="movies" element={<MovieSearch />} />
          <Route path="movies/:id" element={<MovieDetails />} />
          <Route path="movies/add" element={<MovieForm />} />
        </Routes>
      </CartContext.Provider>
    </Fragment>
  );
}

export default App;
