import axios from 'axios';

const url = 'http://localhost:5000/devices'

export const fetchDevices = () => axios.get(url)
export const storeDevice = (newDevice) => axios.post(url, newDevice)
export const deleteDevice = (id) => axios.delete(`${url}/${id}`)