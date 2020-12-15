import { Component } from "react";
import ItemShow from "./viewComponents/ItemShow";

export default class ItemDetail extends Component {
  constructor() {
    super()
    this.fetchItem = this.fetchItem.bind(this);
  }

  componentDidMount() {
    this.fetchItem();
  }

  async fetchItem() {
    const { match } = this.props;
    try {
      const data = await fetch(`http://jsonplaceholder.typicode.com/photos/${match.params.id}`);
      const item = await data.json();
      this.props.getItem(item);
    } catch (error) {
      console.log(error);
    }
  }

  render () {
    const { item } = this.props;

    return (
      <div className="Todo">
        <ItemShow list={item} />
      </div>
    );
  }
}
