import React, {useEffect} from "react";
import { Container, AppBar, Typography, Grow, Grid} from '@mui/material'
import { useDispatch } from 'react-redux'

import {getDevices} from './actions/devices'
import Devices from './components/Devices/Devices'
import Form from './components/Form/Form'
import useStyles from './styles'

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getDevices())
  },[dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Your devices</Typography>
      </AppBar>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Devices/> 
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default App;
