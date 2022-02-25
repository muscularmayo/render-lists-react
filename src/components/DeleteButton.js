import React, { Component } from 'react';
import './deletebutton.css'

export default class DeleteButton extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.handleDelete(this.props.index)
  }


  render() {
    return (
      <span>
        <button onClick={this.handleClick}>Delete</button>
      </span>
    )
  }
}