import express from 'express';
import mongoose from 'mongoose';

import Device from '../models/deviceAppInfo.js';

const router = express.Router();

export const getDevices = async (req, res) => {
    try{
        const devices = await Device.find();

        console.log(devices);

        res.status(200).json(devices)

    } catch (error) {
        res.status(404).json({message: error.message})
    }
};

export const createDevices = async (req, res) => {
    const postDevices = req.body;
    const newDevice = new Device(postDevices);
    try{
        await newDevice.save()

        res.status(201).json(newDevice)

    } catch (error) {
        res.status(409).json({message: error.message})
    }
};

export const deleteDevice = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No device with that Id');

    await Device.findByIdAndRemove(id)

    console.log('DELETE!!!!!')

    res.json({message: 'Post deleted successfully'})
}

export default router;