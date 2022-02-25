import React, { Component } from 'react';
import './editbutton.css';

export default class EditButton extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this)

  }

  handleClick () {
    this.props.handleEdit(this.props.index)
  }

  render () {
    return (
      <span>
        <button index={this.props.index} onClick={this.handleClick}>Edit</button>
      </span>
    )
  }
}