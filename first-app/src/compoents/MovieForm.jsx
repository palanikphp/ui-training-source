import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";

function MovieForm(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let movie = useSelector((state) => state?.movies?.addMovie);

  const movieFormSchema = yup.object().shape({
    title: yup.string().min(3).max(10).required(),
    genre: yup.string().required(),
    language: yup.string().required(),
  });

  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    language: "",
  });

  const [formErrors, setFormErrors] = useState({
    title: "",
    genre: "",
    language: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    dispatch({ type: "ADD_MOVIE", payload: formData });

    //colllect details and make an API calll
  };

  const handleChange = ({ currentTarget: input }) => {
    const { name, value } = input;
    setFormData({
      ...formData,
      [name]: value,
    });

    //let error = validateInput(input);

    let genratedErrors = {};
    try {
      movieFormSchema.validateSync(formData, { abortEarly: false });
    } catch (e) {
      if (e.inner.length > 0) {
        e.inner.forEach((error) => {
          genratedErrors[error.path] = error.message;
        });
      }
    }

    let newFormErrors = {};

    Object.keys(formErrors).forEach((name) => {
      if (genratedErrors[name]) {
        newFormErrors[name] = genratedErrors[name];
      } else {
        newFormErrors[name] = "";
      }
    });

    setFormErrors({
      ...formErrors,
      ...newFormErrors,
    });
  };

  return (
    <div className="ml-5">
      <button className="m-5 text-blue-600" onClick={() => navigate("/movies")}>
        Back
      </button>

      {movie && movie.result && (
        <div
          id="alert-3"
          class="flex p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-200"
          role="alert"
        >
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-700 dark:text-green-800"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div class="ml-3 text-sm font-medium text-green-700 dark:text-green-800">
            Movie has been successfully added !
          </div>
          <button
            type="button"
            class="ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300"
            data-dismiss-target="#alert-3"
            aria-label="Close"
          >
            <span class="sr-only">Close</span>
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            for="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Movie Title
          </label>
          <input
            type="input"
            name="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your movie Title"
            onChange={handleChange}
            value={formData.title}
          />
          {formErrors.title && (
            <p className="text-red-700">{formErrors.title}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            for="genre"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Movie Genre
          </label>
          <input
            type="input"
            name="genre"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your movie Genre"
            value={formData.genre}
            onChange={handleChange}
          />
          {formErrors.genre && (
            <p className="text-red-700">{formErrors.genre}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            for="language"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Movie Language
          </label>
          <input
            type="input"
            name="language"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your movie Genre"
            value={formData.language}
            onChange={handleChange}
          />
          {formErrors.language && (
            <p className="text-red-700">{formErrors.language}</p>
          )}
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default MovieForm;
