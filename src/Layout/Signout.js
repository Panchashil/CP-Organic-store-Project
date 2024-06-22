import React, { useState, useContext } from 'react';

import { Link } from 'react-router-dom'

// Example Context for Authentication
const AuthContext = React.createContext();

const SignOut = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <div className="SignOut">
        <h1>SignOut - React CRUD App</h1>
        <CrudComponent />
      </div>
    </AuthContext.Provider>
  );
};

const CrudComponent = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  const handleSignOut = () => {
    logout();
  };

  return (
    <div>
      <h2>Crud Component</h2>
      {isLoggedIn ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <Link to="Login" className='btn btn-danger' >Login</Link> 
      )}
      <p>{isLoggedIn ? 'User is logged in' : 'User is logged out'}</p>
      {/* Your CRUD functionality goes here */}
    </div>
  );
};

export default SignOut;
