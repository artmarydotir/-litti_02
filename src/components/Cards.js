import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '0 18px',
  },
  media: {
    height: 180,
  },
});

export default function Cards(props) {
  const profile = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={profile.avatar_url}
          title={profile.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {profile.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {profile.bio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={profile.url}>
          See Profile
        </Button>
        <Button size="small" color="secondary">
          public repos: {profile.public_repos}
        </Button>
      </CardActions>
    </Card>
  );
}
