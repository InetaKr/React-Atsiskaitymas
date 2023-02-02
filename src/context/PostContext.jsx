import { createContext, useState, useEffect } from "react";

const PostContext = createContext();

const PostProvider = ({ children }) => {

    const [posts, setPosts] = useState([]);

    useEffect (() => {
        const postData = async () => {
            const res = await fetch('http://localhost:5000/cats');
            const postData = await res.json();
            setPosts(postData)
        };
        postData();
    }, [])

    const addNewPost = async (newPost) => {
        await fetch('http://localhost:5000/cats', {
            method: "POST",
            body: JSON.stringify(newPost),
            headers: {'Content-Type': 'application/json'},
        }).then(res => res.json())
        .then(postData => setPosts([...posts,postData]));
    };

    return(
        <PostContext.Provider
          value={{
            posts,
            addNewPost,
          }}
        >
            {children}
        </PostContext.Provider>
    );
}

export { PostProvider };
export default PostContext;