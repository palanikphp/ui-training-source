import React from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";

function MovieDetails(props) {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const goBack = (path) => {
    navigate(path);
  };

  return (
    <div className="ml-5">
      <button onClick={goBack("/movies")}>Go Back</button>
      <div>
        Details of movie id {params.id}, title {params.title}, keyword{" "}
        {searchParams.get("keyword")}-{searchParams.get("name")}
      </div>
    </div>
  );
}

export default MovieDetails;
