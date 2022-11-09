import React, { Component } from 'react'
import '../styles/style.css'

class Person extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // if (this.props.children) this.val = `Extras: ${this.props.children}`

    return (
      <div className='books' id={this.props.id}>
        <h1 onClick={this.props.delete}>
          Book: {this.props.name} <br /> Author: {this.props.age}
          {/* <br /> */}
          {/* {this.val} */}
        </h1>
        <input
          type='text'
          defaultValue={this.props.name}
          onChange={this.props.inputChange}
        />
      </div>
    )
  }
}

export default Person
