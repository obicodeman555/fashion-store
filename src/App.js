import React, { Component } from "react";
import "./App.css";

import { Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => {
  return <h1>This is Hats Page</h1>;
};

function App() {
  return (
    <di>
      <Route exact path="/" component={HomePage} />

      <Route exact path="/hats" component={HatsPage} />
    </di>
  );
}

export default App;
