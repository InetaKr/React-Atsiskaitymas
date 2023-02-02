import UserContext from "../context/UserContext";
import { useContext } from "react";

const Post = ({ postData }) => {

    const { loggedInUser } = useContext(UserContext);

    return (
        <div>
        {loggedInUser &&
            <>
            <img src={postData.image} alt={postData.catName} />
            <h2>{postData.catName}</h2>
            <p>{postData.description}</p>
            </>
        }
        </div>
    )   
}

export default Post;