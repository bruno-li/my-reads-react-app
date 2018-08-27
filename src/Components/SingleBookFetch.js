import React, { Component } from "react";
      
    class SingleBookFetch extends Component {
        render(){
                const { book } = this.props;

            return (
                     <li>
        <div className="book">
          <div className="book-top">
            {book.imageLinks && (
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${book.imageLinks.thumbnail})`
                }}
              />
            )};

             {/* SELECT FORM INPUT */}
             <div className="book-shelf-changer">
              <select>
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

           {/* GENERATES THE BOOK TITLE */}
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