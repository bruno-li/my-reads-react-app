import React, { Component } from "react";

class SingleBookFetch extends Component {
  render() {
    const { book, bookSelectOption } = this.props; // book object from AllBooks component
    let shelfValue = (book.shelf) ? book.shelf : "move" // condition to check the value of shelf for the select option

    return (
      
      // populates list of books dinamically
      <li>
        <div className="book">
          <div className="book-top">
          {/* uses the imageLinks property from the book API to populate the images */}
            {book.imageLinks && (
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${book.imageLinks.thumbnail})`
                }}>
                </div>
            )}

            {/* SELECT FORM INPUT */}
            <div className="book-shelf-changer">
              <select 
              value={shelfValue} //it will show the shelf option according to shelf category
              onChange={(e) =>
              bookSelectOption(book, e.target.value)}> // event listener for the target selection

                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
            {/* book-shelf-changer */}
          </div>
          {/* //book-top */}

          {/* GENERATES BOOK TITLE */}
          <div className="book-title">{book.title}</div>
          {book.author &&
            book.authors.map((author, index) => (
              <div key={index} className="book-authors">
                {author}
              </div>
              // book-authors
            ))}
        </div>
        {/* //book */}
      </li>
    );
  }
}

export default SingleBookFetch;
