// import { TaskActionTypes } from "./types";

const INITIAL_STATE = {
  input: {
    username: '',
    task: ''
  },
  users: [],
  tasks: []
}

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "HANDLE_INPUT": {
      return {
        ...state,
        input: {
          username: action.payload.input.username,
          task: action.payload.input.task
        }
      }
    }

    case "ADD_TASK":{
      return {
        ...state,
        users: action.payload.users,
        tasks: action.payload.tasks
      }
    }

    case "COMPLETE_TASK":{
      return {
        ...state,
        tasks: action.payload.tasks
      }
    }

    case "DELETE_TASK":{
      return {
        ...state,
        tasks: action.payload.tasks
      }
    }

    case "SET_TASKS":{
      return {
        ...state,
        users: action.payload.users,
        tasks: action.payload.tasks
      }
    }

    default: return state;
  }
}

export default todoReducer;
