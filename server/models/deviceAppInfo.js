import mongoose from 'mongoose';

const deviceSchema = mongoose.Schema({
    serial: String,
    type: String,
    creator: String,
    installed: String,
    status: String,
    zone: String
});

const DeviceStatus = mongoose.model('DeviceStatus', deviceSchema);

export default DeviceStatus;