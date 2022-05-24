import React from "react";

import { Link, useParams, useSearchParams } from "react-router-dom";

function MoviesList(props) {


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
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            RRR
          </th>
          <td className="px-6 py-4">Action</td>
          <td className="px-6 py-4">120</td>
          <td className="px-6 py-4">6</td>
          <td className="px-6 py-4 text-right">
            <Link
              to={"/movies/10"}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              View
            </Link>
          </td>
        </tr>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            KGF
          </th>
          <td className="px-6 py-4">Action</td>
          <td className="px-6 py-4">180</td>
          <td className="px-6 py-4">8</td>
          <td className="px-6 py-4 text-right">
            <Link
              to={"/movies/11"}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              View
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default MoviesList;
