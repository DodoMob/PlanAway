import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FlightTakeOffIcon from '@material-ui/icons/FlightTakeoff';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function SignUp() {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const classes = useStyles();
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          required
          id="outlined-required"
          label="First Name"
          variant="outlined"
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Last Name"
          variant="outlined"
          onChange={(event) => setSurname(event.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Email address"
          variant="outlined"
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          endIcon={<FlightTakeOffIcon />}
        >
          Sign Up
        </Button>
      </form>
      <div>
        <span>Already have an account?</span>
        <span>
          <Link to="/account/login">
            Log In
          </Link>
        </span>
      </div>
    </div>
  );
}
