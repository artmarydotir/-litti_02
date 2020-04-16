import React from 'react';
import Card from './Cards';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function CardList(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      <Grid container item xs={12}>
        {props.profiles.map((profile) => (
          <Card {...profile} key={profile.id} />
        ))}
      </Grid>
    </Grid>
  );
}

export default CardList;
