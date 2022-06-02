import { combineReducers } from "redux";

const initialState = {
  fetching: false,
  result: null,
  error: null,
};

const listMovies = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      //return action.result.data;
      return {
        ...state,
        fetching: true,
        result: null,
        error: null,
      };
    case "FETCH_MOVIES_SUCCESS":
      //return action.result.data;
      return {
        ...state,
        fetching: false,
        result: action.result.data,
        error: null,
      };

    case "FETCH_MOVIES_FAILED":
      //return action.error;
      return {
        ...state,
        fetching: false,
        result: null,
        error: action.error,
      };
    default:
      return state;
  }
};

const addMovie = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      //return action.result.data;
      return {
        ...state,
        fetching: true,
        result: null,
        error: null,
      };
    case "ADD_MOVIE_SUCCESS":
      //return action.result.data;
      return {
        ...state,
        fetching: false,
        result: action.result.data,
        error: null,
      };

    case "ADD_MOVIE_FAILED":
      //return action.error;
      return {
        ...state,
        fetching: false,
        result: null,
        error: action.error,
      };
    default:
      return state;
  }
};

export default combineReducers({ listMovies, addMovie });

//export default movies;
