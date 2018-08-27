import React, { Component } from "react";
import SingleBookFetch from "./SingleBookFetch";


class AllBooks extends Component {
  render() {
          const { books } = this.props; //retrive the value from the app component props

    return (
      <div className="list-books">

        <div className="list-books-title">
          <h1>My Reads</h1>
        </div>
        {/* list-books-title-div */}

             <div className="list-books-content">




        <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
           <div className="bookshelf-books">
            <ol className="books-grid">
            {
                books.filter(book => book.shelf === "currentlyReading")
                .map(book => (
                    <SingleBookFetch
                        book={book}
                        key={book.id}
                    />
                ))
            }   
           </ol>
      </div>
      {/* bookshelf-books */}
      </div>
    /* //bookshelf div */



            </div> 
       {/* list-book-content */}
      </div>
    //   list-books-div
    );
  }
}

export default AllBooks;
