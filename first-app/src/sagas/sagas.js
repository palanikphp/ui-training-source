import { call, put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";

const fetchUsingAxios = (url, payload = null) => {
  return axios.get(url);
};

const createUsingAxios = (url, payload = null) => {
  return axios.post(url, payload);
};

// worker Saga: will be fired on FETCH_MOVIES actions
function* fetchMovies(action) {
  try {
    //const movies = yield call(fetchUsingAxios, action.payload.userId);
    const movies = yield call(
      fetchUsingAxios,
      "https://mockend.com/palanikphp/ui-training/movies?param"
    );
    yield put({ type: "FETCH_MOVIES_SUCCESS", result: movies });
  } catch (e) {
    yield put({ type: "FETCH_MOVIES_FAILED", error: e.message });
  }
}

// worker Saga: will be fired on FETCH_MOVIES actions
function* addMovies(action) {
  try {
    const movies = yield call(
      createUsingAxios,
      "https://mockend.com/palanikphp/ui-training/movies",
      action.payload
    );
    yield put({ type: "ADD_MOVIE_SUCCESS", result: movies });
  } catch (e) {
    yield put({ type: "ADD_MOVIE_FAILED", error: e.message });
  }
}

// /*
//   watcher Saga

//   takeLatest - Does not allow concurrent fetches of movie. If "FETCH_MOVIES" gets
//   dispatched while a fetch is already pending, that pending fetch is cancelled
//   and only the latest one will be run.
// */
// function* mySaga() {
//   yield takeLatest("FETCH_MOVIES", fetchMovies);
// }

function* allSagas() {
  yield all([
    takeLatest("FETCH_MOVIES", fetchMovies),
    takeLatest("ADD_MOVIE", addMovies),
  ]);
}

export default allSagas;
