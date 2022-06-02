import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function MoviesList(props) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    let http = new XMLHttpRequest();
    http.onreadystatechange = function () {
      if (http.readyState === 4) {
        if (http.status === 200) {
          console.log(http.response);
        } else {
          console.log(new Error());
        }
      }
    };
    http.open(
      "GET",
      "https://mockend.com/palanikphp/ui-training/movies?XHR",
      true
    );
    http.send();
  }, []);
  useEffect(() => {
    fetch("https://mockend.com/palanikphp/ui-training/movies?PROMISE")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("From promise");
        console.log(data);
      });
  }, []);

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        "https://mockend.com/palanikphp/ui-training/movies?ASYNC"
      );
      const data = await response.json();
      setMovieList(data);
    }

    fetchMovie();
  }, []);

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Movie Title
          </th>
          <th scope="col" className="px-6 py-3">
            Genre
          </th>
          <th scope="col" className="px-6 py-3">
            Length
          </th>
          <th scope="col" className="px-6 py-3">
            Rating
          </th>
          <th scope="col" className="px-6 py-3">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {movieList.map((movie) => {
          return (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                {movie.title}
              </th>
              <td className="px-6 py-4">{movie.genre}</td>
              <td className="px-6 py-4">{movie.length}</td>
              <td className="px-6 py-4">{movie.rating}</td>
              <td className="px-6 py-4 text-right">
                <Link
                  to={`/movies/${movie.id}`}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  View
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default MoviesList;
