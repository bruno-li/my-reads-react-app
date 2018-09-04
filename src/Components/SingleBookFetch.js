import React from "react";
import noCoverImage from '../icons/no_cover_thumb.gif';


const SingleBookFetch = (props) => {
    const { book,updateShelf} = props; // book object from AllBooks component
    console.log(book);
    // let shelfValue = book.shelf ? book.shelf : "none" // condition to check the value of shelf for the select option
    return (
      // populates list of books dinamically
      <li>
        <div className="book">
          <div className="book-top">
          {/* uses the imageLinks property from the book API to populate the images,
           if no images found, it will use a default no cover image icon */}
            {book.imageLinks && (
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : noCoverImage})`}}>
                </div>
            )}

            {/* SELECT FORM INPUT */}
            <div className="book-shelf-changer">
              <select 
              onChange={(e) => updateShelf(book, e.target.value)}
              value={book.shelf ? book.shelf : "none"}
              > 
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

export default SingleBookFetch;
