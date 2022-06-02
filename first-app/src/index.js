import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

import createSagaMiddleware from "redux-saga";

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/common-reducer";
import movieReducer from "./reducers/movie-reducer";
import appRootSaga from "./sagas/sagas";

import { BrowserRouter } from "react-router-dom";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { cart: cartReducer, movies: movieReducer },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(appRootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
