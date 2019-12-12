import React from 'react';
import { makeStyles } from '@material-ui/styles';

/*
 * Use makeStyles in const Nav Component
 */
const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '100px',
    height: '100%',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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
