import React from 'react';
// Material Ui List Elements
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// MaterialUi Icons
import AssignmentIcon from '@material-ui/icons/Assignment';
import AppsIcon from '@material-ui/icons/Apps';
import BallotIcon from '@material-ui/icons/Ballot';


// Menu items for SideNav / Drawer
export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <AppsIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Samples" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BallotIcon />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
  
  </div>
);
