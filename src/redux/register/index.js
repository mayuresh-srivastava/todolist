const INITIAL_STATE = {
  page: 1
}

const registerReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "NEXT_PAGE": {
      return {
        ...state,
        page: action.payload
      }
    }

    case "PREVIOUS_PAGE": {
      return {
        ...state,
        page: action.payload
      }
    }

    default: return state;
  }
}

export default registerReducer;
