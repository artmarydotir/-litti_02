import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  centerBtn: {
    textAlign: 'center',
    margin: '0 auto',
  },
  barHeight: {
    padding: '10px 0',
  },
});

export default function Appbar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color="secondary">
        <Toolbar className={classes.barHeight}>
          <Typography
            variant="h4"
            color="inherit"
            className={classes.centerBtn}
          >
            The Github Cards
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
