const INITIAL_STATE = {
  items: [],
  item: {}
}

const itemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_ITEMS":{
      return {
        ...state,
        items: action.payload
      }
    }

    case "GET_ITEM":{
      return {
        ...state,
        item: action.payload
      }
    }

    default: return state;
  }
}

export default itemReducer;
