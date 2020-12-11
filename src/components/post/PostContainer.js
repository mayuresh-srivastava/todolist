import Post from "./PostComponent";
import { connect } from "react-redux";
import { getPosts  } from "../../redux/post/action";

const mapStateToProps = (state) => {
  const { posts } = state.post;
  return {
    posts: posts
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPosts: (value) => dispatch(getPosts(value))
});

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);

export default PostContainer;
