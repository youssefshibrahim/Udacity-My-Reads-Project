import React from 'react'
import { Route } from 'react-router-dom'
import SearchPage from './Components/SearchPage'
import HomePage from './Components/HomePage'
import * as BooksAPI from './BooksAPI'
import './App.css'



class BooksApp extends React.Component {

  /* 
    Here I use a state to monitor the real state of the books
    where the "allBooks" are array sice it contains the whole
    books that we get it from API.
  */
  state ={
    allBooks: []
  }

  /*
    Here I used "compnentDidMount" lifecycle event which is run
    after the componentis added to the dom, also because we need
    to get allBooks from a remote endoint. 
  */
  componentDidMount() {
    BooksAPI.getAll().then((allBooks) => {
      this.setState({allBooks: allBooks})
    })
  }

  /*
    Here I used the below arrow function and update method to manage
    the change of the books between three main shelfs ( currently reading,
    want to read,read ).
  */
  booksMoveFromShelf = (booksList, shelf) => {
    BooksAPI.update(booksList, shelf)
        .then(() => {
          this.getBooksAPI();
         })}

 /*
   Here I used the below arrow function and setstate method to reflect
   the change that happend and reflect it and update app UI.
  */
   getBooksAPI() {BooksAPI.getAll()
      .then(allBooks => {
        this.setState({ allBooks})
   
      });
    }
  
  render() {
    
    return (

    /*
     Here I installed the Router that will listen to any changes 
     and present the correct screen whenever the url feel of 
     any changes. in other wordes it is define which path related 
     to wich scrren to showe. We did that for HomePage and our SearchPage.
    */
      <div className="app">
      
        <Route exact path= "/">
          < HomePage
            allBooks={this.state.allBooks}
            booksMoveFromShelf={this.booksMoveFromShelf}
          /></Route>
      
      <Route exact path= "/Search">
       <SearchPage
         allBooks={this.state.allBooks}
         booksMoveFromShelf={this.booksMoveFromShelf}
        /></Route>
  
      </div>
    )
  }
}

export default BooksApp;
