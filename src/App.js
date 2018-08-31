import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import SearchBooks from "./Components/SearchBooks";
import AllBooks from "./Components/AllBooks";
import SingleBookFetch from "./Components/SingleBookFetch";

import "./App.css";

class BooksApp extends Component {
  state = {
    allBooks: [], //store books from BooksAPI
    filterBooks: [] // filter out books user search
  };

  // retrives all books after the component is mount in the UI
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ allBooks: books }); // after promise is resolved, set up the state with books from the API
    });
  }

  // update shelf when a book changes shelf
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(updated =>
      BooksAPI.getAll().then(books => {
        this.setState({ allBooks: books });
      })
    );
  };

  // create a promise request to search for a book in the database
  searchBooks = query => {
    if (query) {
      BooksAPI.search(query).then((result) => {
        this.updateSearchResult(result)
        if (result.error !== "empty query") {
          this.setState({ filterBooks: result }); // if search not empty, set the state of filter books
        } else {
          this.setState({ filterBooks: []});
        }
      });
    } else {
      this.setState({ filterBooks: []});
    }
  };

  // update state of the book
  updateSearchResult = (values) => {
    for (let value of values) {
      for (let book of this.state.allBooks) {
        if (value.id === book.id) {
          value.shelf = book.shelf;
        }
      }
    }
    this.setState({ filterBooks: values});
  };

  render() {
    return (
      <div className="app">
        <Route path="/search"
         render={() => <SearchBooks
            filterBooks = {this.state.filterBooks}
            searchBooks = {(query) => this.searchBooks(query)}
            bookSelectOption = {(book, shelf) => this.updateShelf(book,shelf)}
          />

          }/>

        <Route
          path="/"
          render={() => (
            <AllBooks
              books={this.state.allBooks}
              bookSelectOption={(book, shelf) => this.updateShelf(book, shelf)}
            />
          )}
        />

        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div> /* app div */
    );
  }
}

export default BooksApp;
