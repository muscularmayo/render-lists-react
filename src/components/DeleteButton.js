import React, { Component } from 'react';
import './deletebutton.css'

export default class DeleteButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: this.props.index
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.handleDelete(this.state.index)
  }


  render() {
    return (
      <span>
        <button index={this.props.index} onClick={this.handleClick}>Delete</button>
      </span>
    )
  }
}