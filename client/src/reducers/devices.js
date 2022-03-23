export default (devices = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE': 
            return [...devices, action.payload];
        case 'DELETE':
            return devices.filter((device)=> device._id !== action.payload)
        default:
            return devices;
    }
}