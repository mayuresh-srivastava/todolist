import React from "react";
import "../../../ListItem.css";

const PostList = (props) => {
  const { list } = props
  return (
    list.map((post) => (
      <div className="post card" key={post.id}>
        <div className="card-content">
          <span className="card-title"><i>{post.title}</i></span>
          <p>{post.body}
          </p>
        </div>
      </div>
    ))
  );
}

export default PostList;
