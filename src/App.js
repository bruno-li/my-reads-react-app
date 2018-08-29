import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import SearchBooks from "./Components/SearchBooks";
import AllBooks from "./Components/AllBooks";
import "./App.css";

class BooksApp extends Component {
  state = {
    allBooks: [], //store books from BooksAPI
    searchBooks: [] // filter out books user search
  };

  // retrives all books after the component is mount in the UI
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ allBooks: books }); // after promise is resolved, set up the state with books from the API
    });
  }

  // update shelf when a book changes shelf
  updateShelf = (book,shelf) => {
    BooksAPI
    .update(book,shelf)
    .then(updated => (BooksAPI.getAll().then((books) => {
    this.setState({allBooks:books})
    })))
  }

  render() {
    return (
      <div className="app">

        <Route path="/search" component={SearchBooks} />

          <Route
            path="/"
            render={() => (
              <AllBooks
              books={this.state.allBooks}
              bookSelectOption={(book,shelf) => this.updateShelf(book,shelf)}
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
