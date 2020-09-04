import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';
import { colors } from '@material-ui/core';


const ColorButton = withStyles((theme) => ({
  root: {
    color: '#2196f3',
    backgroundColor: '#ecf0f1',
    '&:hover': {
      backgroundColor: '#c8d6e5',
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function CustomizedButtons(props) {
  const classes = useStyles();

  return (
    <div>
      <ColorButton variant="contained" className={classes.margin} size='large'  style={{margin:'1.5em', marginTop: '5em'}}>
        {props.text}
      </ColorButton>
    </div>
  );
}