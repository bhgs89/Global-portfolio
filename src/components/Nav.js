import React from 'react';
import { makeStyles } from '@material-ui/styles';

/*
 * Use makeStyles in const Component
 */
const useStyles = makeStyles({
  root: {
    color: 'white',
    listStyle: 'none'
  }
});

const Nav = () => {
  const classes = useStyles();
  return (
    <ul className={classes.root}>
      <li>Home</li>
      <li>Works</li>
      <li>About</li>
      <li>Contact</li>
      <li>Hire us</li>
    </ul>
  );
};

export default Nav;
