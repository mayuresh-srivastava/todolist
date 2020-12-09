const INITIAL_STATE = {
  users: []
}

const userReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "SET_USERS":{
      return {
        ...state,
        users: action.payload.users
      }
    }

    default: return state;
  }
}

export default userReducer;
