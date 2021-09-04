import React, { Component } from 'react';
import TheBooks from './TheBooks';
import * as BooksAPI from '../BooksAPI';
import { Link } from 'react-router-dom';





class SearchPage extends Component {
  
  state = {
    query: '',

    /*
    Here The LookBooks arry will store all the books that appear
    as a result for search query.
    */
    lookForBooks: [] 
  }
/*
  Here we will get the query after that we will going to update 
  the query.
*/
  getLatestQueryUpdate = (query) => {
    this.setState({
      query: query
    })
    this.obtainSearchedBooks(query);
  }

  /* When we update the query we will call"obtainSearchedBooks" function,
     So if we have a query we will get all the books by using search method, 
     after that the result will be stored in the "lookForBooks" array.
     And if we do not have a query we will have an empty array.
  */
  obtainSearchedBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((lookForBooks) => {
        /*
        Here I used If statement condition, so when we  face
        an error and there is no a available book, update the state to
        an empty array and show nothing on the screen.
        */
        if (lookForBooks.error) {
        this.setState({lookForBooks: []});
      } else {
        this.setState({lookForBooks: lookForBooks})
      }
      })
    } else {
      this.setState({lookForBooks: []});
    }
  }

    render() {
  
        return (
          
          /*
           In order to to move between another component we used a Link that we
           getit from Router by [import { Link } from 'react-router-dom';] that
           we have installed and 
          */
            <div className="search-books">
            <div className="search-books-bar">

              <Link to ="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                
                <input
                  type="text"
                  placeholder="Search by title or author"
                  value= {this.state.query}

                  /* Here Ochange method will going to call the getLatestQueryUpdate
                     Then it will update the query state.
                     */
                  onChange= {(event) => this.getLatestQueryUpdate(event.target.value)}

                  
                 />

              </div>
            </div>

            <div className="search-books-results">
              <ol className="books-grid">
              {
                this.state.lookForBooks.map(lookForBook => {
                  /*
                   Here I define a variable called defaultShelf, so if the book is
                   not assigned or selected to any of our three main shelfs, it will
                   be equal to "none". And I used Ternary operator for comparison between
                   the allBooks array and the searched books so of any of the ID of 
                   books match, it will change the shelf if not it will equal to none.
                  */
                  let shelf= "none";
                  this.props.allBooks.map(booksList => (
                    booksList.id === lookForBook.id ?
                    shelf= booksList.shelf :
                    ''
                  ));
               
                  
                  return(
                  <li key={lookForBook.id}>
                  <TheBooks 
                     booksList={lookForBook}
                     booksMoveFromShelf={this.props.booksMoveFromShelf}
                     theDefaultShelf={shelf}
                  />
                  </li>
                  );
                })
              }
             
            
              </ol>
            </div>
          </div>
        );
    }

}


export default SearchPage;
