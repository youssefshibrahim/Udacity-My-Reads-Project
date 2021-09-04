import React, { Component } from 'react';



class TheBooks extends Component {
    render () {
        /*
          I faced an error that cannot read property of thumbnail because 
          some books dose not have it, so I create a variable called 
          bookCoverThumbnail, it will be passed to the URL and update it,
          so if the book thumbnail exist it will show it, if not it show nothing.
        */
        let bookCoverThumbnail =this.props.booksList.imageLinks ?
        this.props.booksList.imageLinks.thumbnail : '';
        
        return (

            <div className="book">
                <div className="book-top">


                <div className="book-cover" style={{width: 128,
                    height: 193, backgroundImage:  `url("${bookCoverThumbnail}")` }}></div>

                <div className="book-shelf-changer">
                    <select
                    /*
                    Here I used onChange method, so when an event happend, we will
                    run a function that take the book and shelf status. 
                    */
                    onChange= {(event) => this.props.booksMoveFromShelf(
                        this.props.booksList, 
                        event.target.value)} 
                        value={this.props.theDefaultShelf}
                    >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{this.props.booksList.title}</div>
                <div className="book-authors">{this.props.booksList.authors}</div>
            </div>
        );
    }

}

export default TheBooks;