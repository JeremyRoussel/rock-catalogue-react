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

export default function Dashboard() {
 
  const classes = useStyles();

  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <Menu />
      
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            {/* <Grid container spacing={3}> */}
              {/* Chart */}
              {/* <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>
                  <Chart />
                </Paper>
              </Grid> */}
              {/* Recent Deposits */}
              {/* <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                  <Deposits />
                </Paper>
              </Grid> */}
              {/* Recent Orders */}
              {/* <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid> */}
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </ThemeProvider>
    </div>
  );
}
