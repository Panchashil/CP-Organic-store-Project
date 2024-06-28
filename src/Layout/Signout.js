import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Example Context for Authentication
const AuthContext = React.createContext();

const SignOutComp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    sessionStorage.clear(); // Clear session storage on logout
    navigate('/Login'); // Navigate to the login page after logout
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <div className="SignOutComp">
        <h1>SignOutComp - React CRUD App</h1>
        <CrudComponent />
      </div>
    </AuthContext.Provider>
  );
};

const CrudComponent = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Crud Component</h2>
      {isLoggedIn ? (
        <button onClick={logout}>Sign Out</button>
      ) : (
        <Link to="/Login" className="btn btn-danger">
          Login
        </Link>
      )}
      <p>{isLoggedIn ? 'User is logged in' : 'User is logged out'}</p>
      {/* Your CRUD functionality goes here */}
    </div>
  );
};

export default SignOutComp;
