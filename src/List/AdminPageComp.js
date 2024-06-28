import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import staticData from '../shared/constant/ConstantData';

const AdminPageComp = () => {
  const homeContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  };

  const buttonContainerStyle = {
    position: 'relative',
    top: '100px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    textAlign: 'center',
  };

  const buttonStyle = {
    margin: '10px',
  };

  return (
    <div><div style={buttonContainerStyle}>
      <h2>Welcome Admin.....</h2>
    <Link to="/Maindashboard/ProductDashboard" className="btn btn-primary" style={buttonStyle}>CRUD</Link>
    <Link to="/ProductUser" className="btn btn-secondary" style={buttonStyle}>Products</Link>
    <Link to="/Maindashboard/ManageUser" className="btn btn-warning" style={buttonStyle}>Manage Users</Link>
  </div>
  <div style={homeContainerStyle}>
      <img src='https://docs.telerik.com/devtools/wpf/controls/radchartview/features/images/radchartview-features-animations-main-animations.gif' alt="Background GIF" />
      
    </div></div>
    
  );
}

export default AdminPageComp;
