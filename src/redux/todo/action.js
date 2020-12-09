export const handleInput = (value) => ({
  type: "HANDLE_INPUT",
  payload: value
});

export const addTask = (value) => ({
  type: "ADD_TASK",
  payload: value
});

export const completeTask = (value) => ({
  type: "COMPLETE_TASK",
  payload: value
});

export const deleteTask = (value) => ({
  type: "DELETE_TASK",
  payload: value
});

export const setTasks = (value) => ({
  type: "SET_TASKS",
  payload: value
});
