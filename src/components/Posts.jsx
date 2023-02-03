import Post from "./Post";
import PostContext from "../context/PostContext";
import { useContext, useState, useEffect } from "react";

const Posts = () => {
    const { posts } = useContext(PostContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [posts]);
    
    return(
        <>
          {loading?(
            <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading"/>
          ) : posts.length === 0 ? (
              <p>No Posts Created</p>
            ) : (
              posts.map((post, index) =>(
                <Post
                  key={post.id || index}
                  data={post} 
                />
              ))
          )}
        </>
    );
}
export default Posts;
