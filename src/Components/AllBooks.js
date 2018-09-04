import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";
import SingleBookFetch from "./SingleBookFetch";

class AllBooks extends Component {
  state = {
    allBooks: [] //store books from BooksAPI
  };
    // Books are fetched after component is inserted into DOM
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({
                allBooks: books
            })
        })
    }

  // update shelf when a book changes shelf
  updateShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(updated => {
      // change shelf property of book to a new select shelf category
      book.shelf = newShelf;
      // filter out book and push to array
      let updateBooks = this.state.allBooks.filter(
        resultBook => resultBook.id !== book.id);
      updateBooks.push(book);
      // set the state with the new books
      this.setState({ allBooks: updateBooks });
    });
  };

  render() {
    const {allBooks} = this.state;

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
                {allBooks
                  .filter((book) => book.shelf === "currentlyReading")
                  .map(book => (
                    <SingleBookFetch
                      book={book}
                      key={book.id}
                      value={book.shelf ? book.shelf : "none"}
                      updateShelf={this.updateShelf}
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
                {allBooks.filter((book) => book.shelf === "wantToRead").map(book => (
                  <SingleBookFetch
                      book={book}
                      key={book.id}
                      updateShelf={this.updateShelf}
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
                {allBooks.filter((book) => book.shelf === "read").map(book => (
                  <SingleBookFetch
                      book={book}
                      key={book.id}
                      updateShelf={this.updateShelf}
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
