import { Component } from "react";
import PostList from "./viewComponents/PostList";
import axios from "axios";

export default class Post extends Component {
  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.props.getPosts(res.data.slice(0,10));
    })
  }

  render() {
    const { posts } = this.props;

    return (
      <div className="Todo">
        <PostList list={posts} />
      </div>
    );
  }
}
