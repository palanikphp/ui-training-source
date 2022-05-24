import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MovieForm(props) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    language: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    //colllect details and make an API calll
  };

  const handleChange = ({ currentTarget: input }) => {
    const { name, value } = input;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="ml-5">
      <button className="m-5 text-blue-600" onClick={() => navigate("/movies")}>
        Back
      </button>
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
            required
          />
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
            required
            value={formData.genre}
            onChange={handleChange}
          />
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
            required
            value={formData.language}
            onChange={handleChange}
          />
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
