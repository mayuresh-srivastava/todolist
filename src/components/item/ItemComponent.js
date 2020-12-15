import { Component } from "react";
import ItemList from "./viewComponents/ItemList";

export default class Item extends Component {
  constructor() {
    super()
    this.fetchItems = this.fetchItems.bind(this);
  }

  componentDidMount() {
    this.fetchItems();
  }

  async fetchItems() {
    try {
      const data = await fetch('http://jsonplaceholder.typicode.com/photos');
      const items = await data.json();
      this.props.getItems(items);
    } catch (error) {
      console.log(error);
    }
  }

  render () {
    const { items } = this.props;

    return (
      <div className="Todo">
        <ItemList list={items} />
      </div>
    );
  }
}
