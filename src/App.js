import React, { Component } from 'react';
import Overview from './components/Overview.js'
import DeleteButton from './components/DeleteButton.js'
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
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    this.setState({
      tasks: [...this.state.tasks, (this.state.tasks.length + ': ' + this.state.value)],
      value: '',
    })

    event.preventDefault();

  }

  handleDelete(event) {
    this.setState({
      tasks: [...this.state.tasks, ]
    })
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
            <div key={id}>
              <Overview value={task}/>
              <DeleteButton />
            </div>

            //<div key={id}>{task}</div>
          )
        })}
      </ul>

    </div>
    );
  }
}

export default App;
