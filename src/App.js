import React, { Component } from 'react';
import Overview from './components/Overview.js'
import DeleteButton from './components/DeleteButton.js'
import EditButton from './components/EditButton.js'
import './app.css';

//handle input field and logic
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      tasks: [],
      tasksInEdit: [],
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    if(this.state.value === '') {
      event.preventDefault();
      return;
    }

    this.setState({
      tasks: [...this.state.tasks, this.state.value],
      value: '',
      tasksInEdit: [...this.state.tasksInEdit, false]
    })

    event.preventDefault();
  }

  handleEdit(index, value) {
    const newTasksInEdit = [...this.state.tasksInEdit];
    newTasksInEdit[index] = true;
    this.setState({tasksInEdit: newTasksInEdit})
    // const newTasksState = [...this.state.tasks];
    // newTasksState[index] = value;
    // this.setState({tasks: newTasksState})
  }

  handleDelete(index) {
    const newTasksState = [...this.state.tasks]
    newTasksState.splice(index,1)
    this.setState({tasks: newTasksState})
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
            return(
            <div key={id}>
              <Overview inEdit={this.state.tasksInEdit[id]} value={task}/>
              <DeleteButton index={id} handleDelete={this.handleDelete}/>
              <EditButton index={id} handleEdit={this.handleEdit}/>
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
