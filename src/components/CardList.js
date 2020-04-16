import React from 'react';
import Card from './Cards';
import Grid from '@material-ui/core/Grid';

function CardList(props) {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        {props.profiles.map((profile) => (
          <Card {...profile} key={profile.id} />
        ))}
      </Grid>
    </Grid>
  );
}

export default CardList;
