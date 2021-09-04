import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TheBooks from './TheBooks'

class HomePage extends Component {
    render() {
        return (

            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                       {
                         /*
                           Here since we need to access that componet that is located
                           in the parent "App" we will use "this.props". then we will 
                           filter all the books array and "map" through them to present
                           only the books that are in the "currently reading shelf".
                         */
                           this.props.allBooks
                           .filter(booksList => booksList.shelf === 'currentlyReading')
                           .map(booksList =>
                             <li key={booksList.id}>
                               <TheBooks
                                 booksList={booksList}
                                 booksMoveFromShelf={this.props.booksMoveFromShelf}
                                 theDefaultShelf="currentlyReading"
                               />
                             </li>
                           )
                        }
                     
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                      /*
                           Here since we need to access that componet that is located
                           in the parent "App" we will use "this.props". then we will 
                           filter all the books array and "map" through them to present
                           only the books that are in the "Want to Read".
                           Also we provided each book in the array with a unique key prope
                           which in our case will be the book ID.
                         */
                        this.props.allBooks
                        .filter(booksList => booksList.shelf === 'wantToRead')
                        .map(booksList =>
                          <li key={booksList.id}>
                            <TheBooks
                              booksList={booksList}
                              booksMoveFromShelf={this.props.booksMoveFromShelf}
                              theDefaultShelf="wantToRead"
                            />
                          </li>
                        )
                     }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                      /*
                           Here since we need to access that componet that is located
                           in the parent "App" we will use "this.props". then we will 
                           filter all the books array and "map" through them to present 
                           only the books that are in the "Read" shelf.
                           Also we provided each book in the array with a unique key prope
                           which in our case will be the book ID.
                         */
                        this.props.allBooks
                        .filter(booksList => booksList.shelf === 'read')
                        .map(booksList =>
                          <li key={booksList.id}>
                            <TheBooks
                              booksList={booksList}
                              booksMoveFromShelf={this.props.booksMoveFromShelf}
                              theDefaultShelf="read"
                              
                            />
                          </li>
                        )
                     }
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/Search">Add a book</Link>
              
            </div>
          </div>
        );
    }

}

export default HomePage;