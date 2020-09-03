import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import PhoneIcon from '@material-ui/icons/Phone';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import BuildIcon from '@material-ui/icons/Build';


import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f5f6fa',
    },
  },
});


const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      boxShadow: 'none',
    }
  });
  
  export default function IconTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Paper square className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon tabs example"
        >
          <Tab icon={<HomeIcon style={{color: '#f5f6fa'}} />} aria-label="phone" />
          <Tab icon={<BuildIcon style={{color: '#f5f6fa'}} />} aria-label="favorite" />
          <Tab icon={<CodeIcon style={{color: '#f5f6fa'}} />} aria-label="person" />
          <Tab icon={<PersonPinIcon style={{color: '#f5f6fa'}} />} aria-label="person" />
          <Tab icon={<PhoneIcon style={{color: '#f5f6fa'}} />} aria-label="person" />
        </Tabs>
      </Paper>
    );
  }