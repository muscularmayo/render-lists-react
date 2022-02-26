import React, { Component } from 'react';

//render our task elements from what the user gives us in the form

export default class Overview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value,
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
    this.props.handleEditSubmit(this.props.index, event.target.value)



  }

  handleSubmit(event) {
    this.props.handleEditSubmit(this.props.index, this.state.value)
  }

  render () {
    if(this.props.inEdit === false) {
      return (
        <div>{this.state.value}</div>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <textarea value={this.state.value} onChange={this.handleChange}/>
        </form>
      )
    }
  }
}