import React, { Component } from 'react';

//render our task elements from what the user gives us in the form

export default class Overview extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render () {
    return (<div>{this.props.title}</div>);
  }
}