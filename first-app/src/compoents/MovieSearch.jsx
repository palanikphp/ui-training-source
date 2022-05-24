import React from "react";
import MoviesList from "./MoviesList";
import Search from "./Search";

function MovieSearch(props) {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <Search />
      <MoviesList />
    </div>
  );
}

export default MovieSearch;
