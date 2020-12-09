import Todo from "./TodoComponent";
import { connect } from "react-redux";
import { handleInput, addTask, completeTask, deleteTask, setTasks } from "../../redux/todo/action";

const mapStateToProps = (state) => {
  const { input, tasks, users } = state.todo;
  return {
    input: input,
    tasks: tasks,
    users: users
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleInput: (value) => dispatch(handleInput(value)),
  addTask: (value) => dispatch(addTask(value)),
  completeTask: (value) => dispatch(completeTask(value)),
  deleteTask: (value) => dispatch(deleteTask(value)),
  setTasks: (value) => dispatch(setTasks(value))
});

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default TodoContainer;
