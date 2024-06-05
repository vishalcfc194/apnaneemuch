// src/App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import NewsList from "./components/NewsList";

const App = () => (
  <Provider store={store}>
    <NewsList />
  </Provider>
);

export default App;
