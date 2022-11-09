import React, { Component } from 'react'
import Person from './components/Person'
import './App.css'

// Class Approach
class App extends Component {
  state = {
    books: [
      { personName: 'Dipro', age: 20 },
      { personName: 'Fuad', age: 21 },
      { personName: 'Hasan', age: 20 },
    ],
    extraInfo: 'A likklle adventure',
  }

  btnClicked = (bookName) => {
    this.setState({
      books: [
        { personName: bookName, age: 20 },
        { personName: 'Downey', age: 21 },
        { personName: 'JR', age: 20 },
      ],
      extraInfo: 'A likklle bit adventure',
    })
  }

  chnageWithInput = (event) => {
    this.setState({
      books: [
        { personName: event.target.value, age: 20 },
        { personName: 'Fuad', age: 21 },
        { personName: 'Hasan', age: 20 },
      ],
      extraInfo: 'A likklle adventure',
    })
  }

  render() {
    return (
      <div className='App'>
        <button /*onClick={this.btnClicked.bind(this, 'Sutuni MJ')}*/>
          Click Me
        </button>
        <Person
          name={this.state.books[0].personName}
          age={this.state.books[0].age}
          onInput={this.chnageWithInput}
          // to pass arguments
          /*change={this.btnClicked.bind(this, 'Sutuni MJ')}*/
        >
          {this.state.extraInfo}
        </Person>
        <Person
          name={this.state.books[1].personName}
          age={this.state.books[1].age}
        ></Person>

        <Person
          name={this.state.books[2].personName}
          age={this.state.books[2].age}
          // to send this function to Person.js
          /*change={this.btnClicked.bind(this, 'Sutuni MJ')}*/
        ></Person>
      </div>
    )
  }
}
export default App
