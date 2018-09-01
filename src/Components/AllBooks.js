import React, { Component } from "react";
import { Link } from "react-router-dom";
import SingleBookFetch from "./SingleBookFetch";
import PropTypes from 'prop-types'


class AllBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }
  render() {
    const { books,updateShelf} = this.props; //retrive the value from the app component props
    return (

      <div className="list-books">
        <div className="list-books-title">
          <h1>My Reads</h1>
        </div>
        {/* list-books-title-div */}

        <div className="list-books-content">
          {/* BOOKSHELF CATEGORY SECTION */}

          {/* CURRENTLY READING SHELF */}
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {/* filters book according to shelf property, then sends properties to book fetch component */}
                {books
                  .filter((book) => book.shelf === "currentlyReading")
                  .map(book => (
                    <SingleBookFetch
                      book={book}
                      books={books}
                      key={book.id}
                      updateShelf={updateShelf}
                    />
                  ))}
              </ol>
            </div>
          </div>
          {/* CURRENTLY READING ENDS */}

          {/* WANT TO READ SHELF */}
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want To Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.filter((book) => book.shelf === "wantToRead").map(book => (
                  <SingleBookFetch
                      book={book}
                      key={book.id}
                      updateShelf={updateShelf}
                  />
                ))}
              </ol>
            </div>
          </div>
          {/* WANT TO READ ENDS */}

          {/* READ SHELF */}
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.filter((book) => book.shelf === "read").map(book => (
                  <SingleBookFetch
                       book={book}
                      key={book.id}
                      updateShelf={updateShelf}
                  />
                ))}
              </ol>
            </div>
          </div>
          {/*  READ ENDS */}

        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>

          {/* BOOK CATEGORY SECTION  END */}
        </div>
        {/* list-book-content-div */}
      </div>
      //   list-books-div
    );
  }
}

export default AllBooks;
