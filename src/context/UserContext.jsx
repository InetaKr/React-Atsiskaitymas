import { useEffect } from "react";
import { createContext, useState } from "react";

const UserContext = createContext ();

const UserProvider = ({ children }) =>{

    const [users, setUsers] = useState([]);
    const [loggedInUser, setLoggedInUser]= useState();

    useEffect(() => {
        const usersData= async () => {
            const res = await fetch('http://localhost:5000/users');
            const usersData = await res.json();
            setUsers(usersData);
        }
        usersData();
    }, []);

    return(
       <UserContext.Provider
         value={{
            users,
            loggedInUser,

         }}
       
       >
        {children}
       </UserContext.Provider> 
    );
};

export { UserProvider };
export default UserContext;


