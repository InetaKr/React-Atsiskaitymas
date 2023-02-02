import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import logo from '../media/logo.png'

const Header = () => {

  const { loggedInUser } = useContext(UserContext)

    return (
     <>
     <header>
      <nav>
        <div className="logo">
          <Link to= "/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        {loggedInUser ? (
          <div>
            <div>
              <Link to="/home">Home</Link>
            </div>
            <div>
              <Link to="/add">Add</Link>
            </div>
          </div>
        ):(
          <div>
            <Link to="/">Log In</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
      </nav>
     </header>
     <Outlet />
     
     </>
    );
  }
  
  export default Header;