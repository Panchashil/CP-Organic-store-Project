import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom'
import NavComp from './NavComp'

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to="myslider" className='btn btn-primary' >Slider</Link> &nbsp;
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <Link to="myimages" className='btn btn-danger' >Images</Link> &nbsp;
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link to="parent" className='btn btn-primary' >Parent</Link> &nbsp;
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <Link to="UseState" className='btn btn-secondary' >UseState</Link> &nbsp;
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <Link to="ReactHooks" className='btn btn-danger' >ReactHooks</Link> &nbsp;
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link to="UseEffect" className='btn btn-secondary' >UseEffect</Link> &nbsp;
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link to="nav" className='btn btn-primary' >Nav</Link> &nbsp;
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link to="VirtualDom" className='btn btn-danger' >VirtualDom</Link> &nbsp;
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link to="FormValComp" className='btn btn-primary' >FormValComp</Link> &nbsp;
    </ListItemButton>
    {/* <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link to="ProductAdd" className='btn btn-danger' >ProductAdd</Link> &nbsp;
    </ListItemButton> */}
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link to="ProductDashboard" className='btn btn-danger' >CRUD</Link> &nbsp;
    </ListItemButton>
  </React.Fragment>
);