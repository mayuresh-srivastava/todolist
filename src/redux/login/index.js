const INITIAL_STATE = {
  input: {
    username: "",
    password: ""
  }
}

const loginReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "HANDLE_INPUT": {
      return {
        ...state,
        input: {
          username: action.payload.input.username,
          password: action.payload.input.password
        }
      }
    }

    case "HANDLE_SUBMIT": {
      return {
        ...state
      }
    }

    default: return state;
  }
}

export default loginReducer;
