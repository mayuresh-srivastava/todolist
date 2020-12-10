const INITIAL_STATE = {
  loggedIn: false
}

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "HANDLE_AUTH": {
      return {
        ...state,
        loggedIn: action.payload
      }
    }

    default: return state;
  }
}

export default appReducer;
