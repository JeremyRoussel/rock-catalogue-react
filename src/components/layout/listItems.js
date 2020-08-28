import React from 'react';

// Router Components
import { Link as RouterLink } from 'react-router-dom';

//Material-UI components
// import Link from '@material-ui/core/Link';

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
    <ListItem button component={RouterLink} to="/">
      <ListItemIcon>
        <AppsIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={RouterLink} to="/">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Samples" />
    </ListItem>
    <ListItem button component={RouterLink} to="/">
      <ListItemIcon>
        <BallotIcon />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItem>
    <ListItem button component={RouterLink} to="/mockhome">
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
