import React from "react";
import { Card, CardActions, CardContent, Button, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from "react-redux";
import { deleteDevice } from "../../../actions/devices";


// import useStyles from './styles'

const Device = ({device}) => {

    const dispatch = useDispatch()
    return(
        <Card>
            <div>
                <Typography variant="h6">{device.serial}</Typography>
                <Typography variant="body2">{device.type}</Typography>
            </div>
            <CardContent>
                <Typography variant="body2" color="textSecondary">{device.zone}</Typography>
                <Typography variant="body2" color="textSecondary">{device.installed}</Typography>
                <Typography variant="body2" color="textSecondary">{device.status}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color='primary' onClick={() => dispatch(deleteDevice(device._id))}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Device;