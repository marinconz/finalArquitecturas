import React, {useState} from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { storeDevice } from "../../actions/devices";
// import useStyles from './styles'

const Form = () => {

    // const classes = useStyles();
    const [deviceData, setDeviceData] = useState({
        creator: '', serial: '', type: '', installed: '', status: '', deployed: '', zone: ''
    })
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(storeDevice(deviceData))
        clear()
    }

    const clear = () => {
        setDeviceData({ creator: '', serial: '', type: '', installed: '', status: '', deployed: '', zone: ''});
    };

    return(
        <Paper>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Typography variant="h6">Store a new device</Typography>
            <TextField 
            name="creator" 
            variant="outlined" 
            label="Creator" 
            fullWidth 
            value={deviceData.creator} 
            onChange={(e) => setDeviceData({ ...deviceData, creator: e.target.value })} 
            />
            <TextField name="serial" variant="outlined" label="Serial" fullWidth multiline rows={4} value={deviceData.serial} onChange={(e) => setDeviceData({ ...deviceData, serial: e.target.value })} />
            <TextField name="type" variant="outlined" label="Type" fullWidth value={deviceData.type} onChange={(e) => setDeviceData({ ...deviceData, type: e.target.value })} />
            <TextField name="installed" variant="outlined" label="Installed" fullWidth value={deviceData.installed} onChange={(e) => setDeviceData({ ...deviceData, installed: e.target.value})} />
            <TextField name="status" variant="outlined" label="Status" fullWidth value={deviceData.status} onChange={(e) => setDeviceData({ ...deviceData, status: e.target.value})} />
            <TextField name="zone" variant="outlined" label="Zone" fullWidth value={deviceData.zone} onChange={(e) => setDeviceData({ ...deviceData, zone: e.target.value})} />
            <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
        </Paper>
    )
}

export default Form;