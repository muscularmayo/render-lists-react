import Overview from './components/Overview.js'
import React, { Component } from 'react';
import './app.css';

//handle input field and logic
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      tasks: [],
  };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    this.setState({
      tasks: [...this.state.tasks, this.state.value],
      value: '',
    })

    event.preventDefault();

  }

  render () {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          <textarea value={this.state.value} onChange={this.handleChange}></textarea>
        </label>
        <input type="submit" value="Submit"></input>
      </form>
      <div>Tasks: </div>
      <ul>
        {this.state.tasks.map((task, id) => {
          return (
            //<div key={id}>{task}</div>
            <Overview key={id} value={task}/>
          )
        })}
      </ul>

    </div>
    );
  }
}

export default App;
