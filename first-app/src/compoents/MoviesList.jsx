import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

//import axios from "axios";

import { Link } from "react-router-dom";

function MoviesList(props) {
  //const [movieList, setMovieList] = useState([]);
  let movieList = useSelector((state) => state?.movies?.listMovies || []);
  movieList = movieList || [];
  const dispatch = useDispatch();

  // useEffect(() => {
  //   let promise = new Promise((resolve, reject) => {
  //     setTimeout(() => resolve("after 1 second"), 1000);
  //   });

  //   promise
  //     .then((response) => console.log(response))
  //     .catch((error) => console.log(error));
  // }, []);

  // useEffect(() => {
  //   let http = new XMLHttpRequest();
  //   http.onreadystatechange = function () {
  //     if (http.readyState === 4) {
  //       if (http.status === 200) {
  //         console.log(http.response);
  //       } else {
  //         console.log(new Error());
  //       }
  //     }
  //   };
  //   http.open(
  //     "GET",
  //     "https://mockend.com/palanikphp/ui-training/movies?XHR",
  //     false
  //   );
  //   http.send();
  // }, []);

  // useEffect(() => {
  //   //async function asyncTest() {
  //   function myFetch() {
  //     return new Promise((resolve, reject) => {
  //       let http = new XMLHttpRequest();
  //       http.onreadystatechange = function () {
  //         if (http.readyState === 4) {
  //           if (http.status === 200) {
  //             //console.log(http.response);
  //             resolve(http.response);
  //           } else {
  //             //console.log(new Error());
  //             reject(new Error());
  //           }
  //         }
  //       };
  //       http.open(
  //         "GET",
  //         "https://mockend.com/palanikphp/ui-training/movies?XHR-PROMISE2",
  //         false
  //       );
  //       http.send();
  //     });
  //   }

  //   //const response = await myFetch();
  //   myFetch()
  //     .then((response) => console.log(response))
  //     .then((response) => console.log(response))
  //     .then((response) => console.log(response))
  //     .catch((error) => console.log(error));
  //   //console.log(response);
  //   //}

  //   //asyncTest();
  //   // myFetch()
  //   //   .then((response) => console.log("test", response))
  //   //   .catch((error) => console.log(error));
  // }, []);

  // useEffect(() => {
  //   fetch("https://mockend.com/palanikphp/ui-training/movies?FETCH-PROMISE")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("From promise");
  //       console.log(data);
  //     });
  // }, []);

  useEffect(() => {
    //if (movieList.result && movieList.result.length === 0)
    dispatch({ type: "FETCH_MOVIES" });

    // async function fetchMovies() {
    //   const response = await axios.get(
    //     "https://mockend.com/palanikphp/ui-training/movies?axios"
    //   );
    //   setMovieList(response.data);
    // }

    // fetchMovies();
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
            Language
          </th>
          <th scope="col" className="px-6 py-3">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      {movieList.fetching && (
        <tbody>
          <tr>
            <td>
              <svg
                role="status"
                class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </td>
          </tr>
        </tbody>
      )}
      <tbody>
        {movieList.result &&
          movieList.result.map((movie) => (
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
              <td className="px-6 py-4">{movie.language}</td>
              <td className="px-6 py-4 text-right">
                <Link
                  to={`/movies/${movie.id}`}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default MoviesList;
