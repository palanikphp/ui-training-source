import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function MovieDetails(props) {
  const params = useParams();
  //const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://mockend.com/palanikphp/ui-training/movies/${params.id}`
      );
      const data = await response.json();
      setMovie(data);
    }

    fetchMovie();
  }, [params.id]);

  return (
    <div className="ml-5">
      <button className="text-blue-700" onClick={() => navigate("/movies")}>
        Go Back
      </button>
      <h1>Movie Details</h1>
      {Object.keys(movie).map((key) => (
        <div>
          <span>{key}:</span>
          <span>{movie[key]}</span>
        </div>
      ))}
    </div>
  );
}

export default MovieDetails;
