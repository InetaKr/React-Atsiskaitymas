import Post from "./Post";
import PostContext from "../context/PostContext";
import { useContext } from "react";

const Posts = () => {
    const { posts } = useContext(PostContext);

    return(
        <>
          {
            posts.map((post, index) =>
                <Post
                  key={post.id || index}
                  data={post} 
                />
            )
          }
        </>
    );
}

export default Posts;
