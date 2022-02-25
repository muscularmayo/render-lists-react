import React, { Component } from 'react';

export default class EditButton extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {

  }

  render () {
    return (
      <span>
        <button index={this.props.index} onClick={this.handleClick}>Edit</button>
      </span>
    )
  }
}