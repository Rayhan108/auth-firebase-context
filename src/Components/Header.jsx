import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProviders';

const Header = () => {
    const {user,logOut} =useContext(AuthContext)
    // console.log(user);
    const handleLogOut=()=>{
        logOut()
        .then(()=>{
            console.log('sign out successfull');
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div className="navbar bg-neutral text-neutral-content flex justify-between">
        <a className="font-bold text-3xl">Authentication</a>
     <div>
     <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
     <Link className="btn btn-ghost normal-case text-xl" to="/order">Order</Link>
  { user &&  <Link className="btn btn-ghost normal-case text-xl" to="/profile">Profile</Link>}
        <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
        {
            user ? <>
            <span>{user.email}</span>
            <button onClick={handleLogOut} className="btn btn-xs mr-3">Sign Out</button>
            </> :<Link to="/login" className="btn btn-xs ml-3">Sign in</Link>
        }
     </div>
      
      </div>
    );
};

export default Header;