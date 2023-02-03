import UserContext from "../context/UserContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {

  const {users, setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState(null)

  const [logInInputs, setLogInInputs] = useState({
    email: "",
    password: ""
  });

 
  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedInUser = users.find(
      user => user.email === logInInputs.email && user.password === logInInputs.password
    );

    if(loggedInUser){
      setLoggedInUser(loggedInUser);
      navigate("/home");
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

      return (
     <>
     <form onSubmit={handleSubmit} className="login-form">
      <label>
        Email:
      <input 
        type="email"
        value={logInInputs.email}
        onChange= {(e) => setLogInInputs({...logInInputs, email: e.target.value})
        }
      />
      </label>
      <label>
        Password:
      <input 
        type="password"
        value={logInInputs.password}
        onChange= {(e) => setLogInInputs({...logInInputs, password: e.target.value})
        }
      />
      </label>
      <button type="submit"> Log In </button>
     </form>
     {errorMessage && <p>{errorMessage}</p>}  
     </>
    );
  }
  
  export default LogIn;