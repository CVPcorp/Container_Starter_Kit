import { connect } from 'react-redux';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

import { actions } from '../../store/actions/tasks';
import Task from './Task/Task';
import './Tasks.css';

class Tasks extends Component {
  componentDidMount = () => {
    if (!this.props.tasks) {
      this.props.loadTasks();
    }
  }

  deleteTaskHandler = (id) => {
    this.props.deleteTask(id);
  }

  addTaskHandler = () => {
    const titleElement = document.getElementById('title');
    const descriptionElement = document.getElementById('description');

    this.props.addTask({
      title: titleElement.value,
      description: descriptionElement.value,
    });

    titleElement.value = '';
    descriptionElement.value = '';    
  }

  updateTaskStatusHandler = (event, id) => {
    this.props.updateTaskStatus(id, {
      status: event.target.value,
    });
  }

  render() {
    const tasks = !this.props.tasks ? [] : this.props.tasks.map(task => {
      return (
        <Task
          task={task}
          key={task.id}
          deleteTask={this.deleteTaskHandler}
          updateTaskStatus={this.updateTaskStatusHandler}>
        </Task>
      );
    });

    return (
      <div className="Tasks">
        <div className="NewTask">
          <FormControl type="text" placeholder="My Task Title" id="title" />
          <FormControl as="textarea" rows="3" placeholder="Task description goes here..." id="description" />
          <Button variant="primary" onClick={this.addTaskHandler}>Add Task</Button>
        </div>
        <hr></hr>
        <div>{
          tasks.length > 0
            ? tasks
            : <h1>Please submit a task...</h1>
        }</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks
  };
}

const mapDispatchToProps = dispatch => {
  return {
    loadTasks: () => dispatch(actions.loadTasks()),
    addTask: (task) => dispatch(actions.addTask(task)),
    deleteTask: (id) => dispatch(actions.deleteTask(id)),
    updateTaskStatus: (id, status) => dispatch(actions.updateTaskStatus(id, status)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);