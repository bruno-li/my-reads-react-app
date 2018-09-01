import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import SearchBooks from "./Components/SearchBooks";
import AllBooks from "./Components/AllBooks";
import "./App.css";

class BooksApp extends Component {
  state = {
    allBooks: [] //store books from BooksAPI
  };

  // retrives all books after the component is mount in the DOM
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ allBooks: books});
    });
  }

  // update shelf when a book changes shelf
  updateShelf = (book, newShelf) => {
    BooksAPI
    .update(book, newShelf)
    .then((updated) => {
      // change shelf property of book to a new select shelf category
      book.shelf = newShelf;
      // filter out book and push to array
      let updateBooks = this.state.allBooks
      .filter((resultBook) => resultBook.id !== book.id)
      updateBooks.push(book)
      // set the state with the new books
      this.setState({allBooks: updateBooks});
    })
  };

  render() {
      return (
      <div className="app">

        <Route path="/search"
         render={() => (
          <SearchBooks
            filterBooks = {this.state.filterBooks}
            books={this.state.allBooks}
          />
          )}/>

        <Route
          path="/"
          render={() => (
            <AllBooks
              books={this.state.allBooks}
              updateShelf={this.updateShelf}
            />
          )}
        />
      </div> /* app div */
    );
  }
}

export default BooksApp;
