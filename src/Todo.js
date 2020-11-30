import { Component } from 'react';
import InputItem from './Input';
import ListArray from './ListItem';
import './Todo.css';

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {
        text: ''
      }
    }
  }

  handleInput = (event) => {
    this.setState({
      currentItem: {
        text: event.target.value,
        key: Date.now()
      }
    })
  }

  addItem = (event) => {
    event.preventDefault();
    const newItem = this.state.currentItem;

    if (newItem !== "") {
      const newItems = [...this.state.items, newItem]
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      });
    }
  }

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    })
  }

  render() {
    const items = this.state.items;

    return (
      <div className="Todo">
        {/* <div>{this.state.name}</div><br /> */}
        <InputItem handleInput={this.handleInput} addItem={this.addItem} currentItem={this.state.currentItem} />
        <ListArray list={items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}
