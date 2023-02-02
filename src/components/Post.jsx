import UserContext from "../context/UserContext";
import { useContext } from "react";

const Post = ({ data }) => {

    const { loggedInUser } = useContext(UserContext);

    return (
        <div>
          {loggedInUser && (
            <>
              <img src={data.image} alt={data.catName} />
              <h2>{data.catName}</h2>
              <p>{data.description}</p>
            </>
          )}
        </div>
      );
    };

export default Post;