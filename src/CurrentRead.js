import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import serializeForm from "form-serialize";

class CurrentRead extends Component {
  render() {
    const { books } = this.props; //retrive the value from the app component props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books"> </div>




        <ol className="books-grid"> 
        
         <li>
          <div className="book"> 
            <div className="book-top"> 
            {
              books.filter(book => book.shelf === "currentlyReading")
              .map(book => (
                book.imageLinks && (
                  <div className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage:`url(${book.imageLinks.thumbnail})`
                  }}
                  />
                )
              ))
            }
            
            </div>
          </div>
          
          <div className="book-title">To Kill a Mockingbird</div>
        </li>
        </ol>
      </div> //bookshelf
    );
  }
}

export default CurrentRead;
