// ./components/layout/listItems.js

import React from 'react';

// Router Components
import { NavLink as RouterLink } from 'react-router-dom';

// Material Ui List Elements
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// MaterialUi Icons
import AssignmentIcon from '@material-ui/icons/Assignment';
import AppsIcon from '@material-ui/icons/Apps';
import BallotIcon from '@material-ui/icons/Ballot';
import HomeIcon from '@material-ui/icons/Home';


// Menu items for SideNav / Drawer
export const mainListItems = (
  <div>
    <ListItem button component={RouterLink} to="/" activeClassName="hurray">
      <ListItemIcon>
        <AppsIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={RouterLink} to="/" activeClassName="hurray">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Samples" />
    </ListItem>
    <ListItem button component={RouterLink} to="/" activeClassName="hurray">
      <ListItemIcon>
        <BallotIcon />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItem>
    <ListItem button component={RouterLink} to="/mockhome" activeClassName="hurray">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Mock Homepage" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
  
  </div>
);
