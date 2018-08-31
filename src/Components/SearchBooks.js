import React, { Component } from "react";
import { Link } from "react-router-dom";
import SingleBookFetch from "./SingleBookFetch";
// import serializeForm from "form-serialize";

class SearchBooks extends Component {
  render() {
    const {filterBooks, searchBooks, bookSelectOption} = this.props;
    return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">
              Close
              </Link>

              <div className="search-books-input-wrapper">
               
                <input type="text"
                 placeholder = "Search books by title or author"
                 onChange={(e) => searchBooks(e.target.value)} // event listener for the search input
                 />

              </div>
            </div>
            {/* search-books-bar */}

            <div className="search-books-results">
              <ol className="books-grid">
              {filterBooks.map(book =>
              (
               <SingleBookFetch
               book={book}
               key={book.id}
               bookSelectOption={bookSelectOption}
               />
              ))}
              </ol>
            </div>
          </div> 
          // search-books-div
    );
  }
}

export default SearchBooks;
