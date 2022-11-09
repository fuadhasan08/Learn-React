import React, { Component } from 'react'
import Person from './components/Person'
import './App.css'

// Class Approach
class App extends Component {
  state = {
    books: [
      { id: 1, bookName: 'Tomb of Sand', author: "Geetanjali Shree's" },
      { id: 2, bookName: 'Lal Salam', author: 'Smriti Irani' },
      { id: 3, bookName: 'Queen of Fire', author: 'Devika Rangachari' },
      { id: 4, bookName: 'The Maverick Effect', author: 'Harish Mehta' },
    ],
  }

  chnageWithInput = (event, index) => {
    let book = event.target.value

    let books = [...this.state.books]

    books[index].bookName = book

    this.setState({ books: books })
  }

  deleteElement = (index) => {
    let books = [...this.state.books]
    books.splice(index, 1)
    this.setState({
      books: books,
    })
  }

  render() {
    let allElem = this.state.books.map((item, index) => {
      return (
        <Person
          name={item.bookName}
          age={item.author}
          id={index}
          delete={this.deleteElement.bind(this, index)}
          key={item.id}
          inputChange={(event) => this.chnageWithInput(event, index)}
        ></Person>
      )
    })

    return (
      <div className='App'>
        {/* <button onClick={this.btnClicked.bind(this, 'Sutuni MJ')}>
          Click Me
        </button> */}
        {allElem}
      </div>
    )
  }
}
export default App
