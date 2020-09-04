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



const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      maxWidth: 900,
      backgroundColor: 'transparent',
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
          <Tab icon={<HomeIcon style={{color: '#2196f3', fontSize:'2.5em'}}  />} aria-label="phone" />
          <Tab icon={<CodeIcon style={{color: '#2196f3', fontSize:'2.5em'}} />} aria-label="person" />
          <Tab icon={<PersonPinIcon style={{color: '#2196f3', fontSize:'2.5em'}} />} aria-label="person" />
          <Tab icon={<PhoneIcon style={{color: '#2196f3', fontSize:'2.5em'}} />} aria-label="person" />
        </Tabs>
      </Paper>
    );
  }