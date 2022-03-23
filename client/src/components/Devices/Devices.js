import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@mui/material";
import Device from './Device/Device.js'

const Devices = () => {
    const devices = useSelector((state) => state.devices);
    console.log('estes son', devices)

    return(
        !devices.length ? <CircularProgress/> : (
            <Grid container alignItems="stretch" spacing={3}>
                {devices.map((device)=> (
                    <Grid key={device._id} item xs={12} sm={6}>
                        <Device device={device}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Devices;