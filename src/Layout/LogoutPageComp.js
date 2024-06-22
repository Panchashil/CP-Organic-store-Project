import React from 'react';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LogoutPageComp = () => {
  const nav = useNavigate(); // Correctly using useNavigate here

  const alertMsg = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      sessionStorage.clear();
      nav('/Login'); // Navigating to '/Login' on logout
    }
  };

  return (
    <div>
      <Link to="/Login" className='btn btn-primary' onClick={alertMsg}>
        Logout
      </Link>
    </div>
  );
};

export default LogoutPageComp;
