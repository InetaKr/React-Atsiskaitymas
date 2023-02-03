import PostContext from "../context/PostContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {

  const  { addNewPost } = useContext(PostContext);
  const navigate = useNavigate();

  const [postInputs,setPostInputs] = useState({
    image: '',
    catName: '',
    description:''
  });

  const handleSubmit = (e) =>{
    e.preventDefault();
    const newPost = {
      image: postInputs.image,
      catName: postInputs.catName,
      description: postInputs.description,
      id: Date.now()
    };
    addNewPost(newPost);
    navigate('/home')
  }

    return (
     <>
     <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="form">
        <h1>Show Your Cat</h1>
        <div className="label-wrapper">
        <label>
          Image:
          <input type="text" name="image"
            value={postInputs.image}
            onChange={(e) => setPostInputs({...postInputs, image:e.target.value})}/>
        </label>
        <label>
          Cat Name:
          <input type="text" name="catName"
            value={postInputs.catName}
            onChange={(e) => setPostInputs({...postInputs, catName:e.target.value})}/>
        </label>
        <label>
          Tell Us about your Cat:
          <textarea type="text" name="description"
            value={postInputs.description}
            onChange={(e) => setPostInputs({...postInputs, description:e.target.value})}/>
        </label>
        </div>
        <input type="submit" value="Create" />
      </form>  
      </div> 
     </>
    );
  }
  
  export default AddPost;