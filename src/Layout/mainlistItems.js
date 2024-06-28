import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import { Link, useNavigate } from 'react-router-dom';

const handleLogout = async (navigate) => {
  if (window.confirm("Are you sure you want to logout?")) {
    try {
      // Perform logout logic here (e.g., clear session, call backend API)
      sessionStorage.clear(); // Clear session storage

      // Redirect to the login page
      navigate('/Login');
    } catch (error) {
      console.error('Error during logout:', error);
      alert('Error during logout');
    }
  }
};

const SecondaryListItemsWrapper = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Visit Again
      </ListSubheader>
      <ListItemButton onClick={() => handleLogout(navigate)}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <span className='btn btn-danger'>Logout</span> &nbsp;
      </ListItemButton>
    </React.Fragment>
  );
};

export const secondaryListItems = <SecondaryListItemsWrapper />;

export const mainListItems = (
  <div>
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <Link to="oil" className='btn btn-primary'>Oil</Link> &nbsp;
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Link to="cart">
            <ShoppingCartIcon />
          </Link>
        </ListItemIcon>
        <Link to="Vegetables" className='btn btn-danger'>Vegetables</Link> &nbsp;
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <Link to="Pulses" className='btn btn-primary'>Pulses</Link> &nbsp;
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <Link to="Furits" className='btn btn-secondary'>Fruits</Link> &nbsp;
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <Link to="Dairy" className='btn btn-danger'>Dairy</Link> &nbsp;
      </ListItemButton>
    </React.Fragment>
  </div>
);
