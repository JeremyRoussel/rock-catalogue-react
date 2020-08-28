import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Menu from './Menu'
import Copyright from './Copyright'
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const theme = createMuiTheme({
  palette: {
    type: "dark",
  }
});

export default function Dashboard(props) {
 
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <Menu />
      
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>

            {props.children}
    
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </ThemeProvider>
    </div>
  );
}