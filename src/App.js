import React, { Component } from "react";
import { Route } from "react-router-dom";
import SearchBooks from "./Components/SearchBooks";
import AllBooks from "./Components/AllBooks";
import "./App.css";

class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={AllBooks} />
        <Route path="/search" component={SearchBooks}/>
      </div>
    );
  }
}
export default BooksApp;
