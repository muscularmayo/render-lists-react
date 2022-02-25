import React, { Component } from 'react';

//render our task elements from what the user gives us in the form

export default class Overview extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {

  //   };
  // }

  render () {
    if(this.props.inEdit === false) {
      return (
        <div>{this.props.value}</div>
      );
    } else {
      return (
        <form>
          <textarea value={this.props.value}/>
        </form>
      )
    }
  }
}