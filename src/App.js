import React, { Component } from "react";
import "./App.css";

import { Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <di>
      <Route exact path="/" component={HomePage} />

      <Route path="/shop" component={ShopPage} />
    </di>
  );
}

export default App;
