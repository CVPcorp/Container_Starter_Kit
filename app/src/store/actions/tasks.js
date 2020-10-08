import axios from 'axios';

import config from '../../config';

export const actionTypes =  {
  LOAD_TASKS: "LOAD_TASKS",
  ADD_TASK: "ADD_TASK",
  DELETE_TASK: "DELETE_TASK",
  UPDATE_TASK_STATUS: "UPDATE_TASK_STATUS",
}

const _loadTasks = (tasks) => {
  return {
    type: actionTypes.LOAD_TASKS,
    tasks: tasks
  }
}

const loadTasks = () => {
  return dispatch => {
    axios.get(config.services.tasks.uri)
      .then( res => {
        dispatch(_loadTasks(res.data))
      })
  }
}

const _addTask = (task) => {
  return {
    type: actionTypes.ADD_TASK,
    task: task
  }
}

const addTask = (task) => {
  return dispatch => {
    axios.post(config.services.tasks.uri, task)
      .then(res => {
        dispatch(_addTask(res.data))
      })
  }
}

const _deleteTask = (id) => {
  return {
    type: actionTypes.DELETE_TASK,
    id: id
  }
}

const deleteTask = (id) => {
  return dispatch => {
    axios.delete(`${config.services.tasks.uri}/${id}`)
      .then(res => {
        dispatch(_deleteTask(id))
      })
  }
}

const _updateTaskStatus = (id, status) => {
  return {
    type: actionTypes.UPDATE_TASK_STATUS,
    status: status,
    id: id
  }
}

const updateTaskStatus = (id, status) => {
  return dispatch => {
    axios.patch(`${config.services.tasks.uri}/${id}/status`, status)
      .then(res => {
        dispatch(_updateTaskStatus(id, status))
      })
  }
}

export const actions =  {
  loadTasks,
  addTask,
  deleteTask,
  updateTaskStatus,
}