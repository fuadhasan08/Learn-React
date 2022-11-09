import React, { Component } from 'react'
import '../styles/style.css'

class Person extends Component {
  constructor(props) {
    super(props)
    this.val = ''
  }

  render() {
    if (this.props.children) this.val = `Extras: ${this.props.children}`

    return (
      <div className='person'>
        <input
          type='text'
          defaultValue={this.props.name}
          onChange={this.props.onInput}
        />
        <h1 /*onClick={this.props.change}*/>
          Name: {this.props.name} & Age: {this.props.age}
          <br />
          {this.val}
        </h1>
      </div>
    )
  }
}

export default Person
