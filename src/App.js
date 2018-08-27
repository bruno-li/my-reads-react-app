import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import SearchBooks from "./SearchBooks";
import CurrentRead from "./CurrentRead";
import WantToRead from "./WantToRead";
import BooksRead from "./BooksRead";
import "./App.css";

class BooksApp extends Component {
  state = {
    allBooks: [], //store books from BooksAPI
    searchBooks: [] // filter out books user search
  };

 // retrives all books after the component is mounted in the UI
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
        this.setState({allBooks: books}) // after promise is resolved, set up the state with books from the API
    })
  }
  
  render() {
    return (
      <div className="app">

        <Route path="/search" component={SearchBooks} />

        <div className="list-books">
          <div className="list-books-title">
            <h1>My Reads</h1>
          </div>

          <Route
            path="/"
            render={() => (
              <div className="list-books-content">
                <div>
                  <CurrentRead 
                  books={this.state.allBooks}
                   />
                  <WantToRead />
                  <BooksRead />
                </div>
                <div className="open-search">
                  <Link to="/search">Add a book</Link>
                </div>
              </div>
            )}
          />
        </div>
        {/* list-books div */}
      </div> /* app div */
    );
  }
}

export default BooksApp;
