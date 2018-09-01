import React, { Component } from "react";
import { Link } from "react-router-dom";
import SingleBookFetch from "./SingleBookFetch";
import * as BooksAPI from "../BooksAPI";

class SearchBooks extends Component {
  state = {
    query: "",
    newBooks: [],
    searchError: false
  };

  fectchBooks = e => {
    const query = e.target.value;
    this.setState({ query: query });

    // checks for inputs
    if (query) {
      BooksAPI.search(query, 20).then(books => {
        books.length > 0
          ? this.setState({ newBooks: books, searchError: false })
          : this.setState({ newBooks: [], searchError: true });
      });
    } else {
      this.setState({ newBooks: [], searchError: false });
    }
  };

  render() {
    const { books, filterBooks, bookSelectOption } = this.props;
    const { query, newBooks, searchError } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            
            Close
          </Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              className="search-books-results"
              placeholder="Search books by title or author"
              value={query}
              onChange={this.fectchBooks}
            />
          </div>
        </div>
        {/* search-books-bar */}

        <div className="search-books-results">
          {newBooks.length > 0 && (
            <div>
              <div className="">
                <h3>Search has returned {newBooks.length} books </h3>
              </div>
              <ol className="books-grid">
                {newBooks.map(book => (
                  <SingleBookFetch
                    book={book}
                    books={books}
                    key={book.id}
                    bookSelectOption={bookSelectOption}
                  />
                ))}
              </ol>
            </div>
          )}

          {searchError && (
            <div>
              <div className="">
                <h3>No books found. Please try again!</h3>
              </div>
            </div>
          )}
        </div>
      </div>
      // search-books-div
    );
  }
}

export default SearchBooks;
