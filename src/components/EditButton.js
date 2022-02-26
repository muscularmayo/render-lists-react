import React, { Component } from 'react';
import './editbutton.css';

export default class EditButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      clicked: false,
    }
    this.handleClick = this.handleClick.bind(this)

  }

  handleClick () {
    const clicked = !this.state.clicked;
    this.props.handleEdit(this.props.index)

    this.setState({clicked: clicked})
  }

  render () {
    return (
      <span>
        <button index={this.props.index} onClick={this.handleClick}>Edit</button>
      </span>
    )
  }
}