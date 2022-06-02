import React from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";

function MovieDetails(props) {
  let navigate = useNavigate();
  let params = useParams();
  let [searchParams] = useSearchParams();

  window.console.log(searchParams.get("name")); // to get query string

  return (
    <div className="ml-5">
      <button onClick={() => navigate("/movies")}>
        <svg
          className="w-6 h-6 dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
      </button>
      <div>Details of movie-{params.id}</div>
    </div>
  );
}

export default MovieDetails;
