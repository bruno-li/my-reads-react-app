import React, { Component } from "react";
import { Link } from "react-router-dom";
import SingleBookFetch from "./SingleBookFetch";
import * as BooksAPI from "../BooksAPI";

class SearchBooks extends Component {
  state = {
    searchResult: [],
    newBooks: [],
    searchError: false
  };

  // function to search book through the API
  onSearch = (e) => {
        const searchQuery = e.target.value;

        if(searchQuery) {
            BooksAPI
            .search(searchQuery)
            .then((resultBooks)=>{
                if(!resultBooks || resultBooks.hasOwnProperty('error')){
                    this.setState({searchResult: [], searchError: true })
                } else {
                    this.setState({searchResult: resultBooks, searchError:false})
                    this.syncBookShelfProperty()
                }
            })
        } else {
            this.setState({searchResult: [] })
        }
    }

   // Sync search result book shelf property with current shelf books
    syncBookShelfProperty = () => {
        const books= this.state.newBooks;
        const searchResult = this.state.searchResult
        if(searchResult.length > 0) {
                books.forEach((book) => {
                    searchResult.forEach((searchResultBook) =>{
                        if(book.id === searchResultBook.id) {
                            searchResultBook.shelf = book.shelf
                        }
                    })
                })
        }
        this.setState({searchResult: searchResult})
    }

  render() {
    const {searchResult} = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              className="search-books-results"
              placeholder="Search books by title or author"
              // value={query}
              onChange={this.onSearch}
            />
          </div>
        </div>
        {/* search-books-bar */}

        <div className="search-books-results">
          {searchResult.length > 0 && (
            <div>
              <div className="">
                <h3>Search has returned {searchResult.length} books </h3>
              </div>
              <ol className="books-grid">
                {searchResult.map(book => (
                  <SingleBookFetch
                    book={book}
                    key={book.id}
                  />
                ))}
              </ol>
            </div>
          )}

        
        </div>
      </div>
      // search-books-div
    );
  }
}

export default SearchBooks;
