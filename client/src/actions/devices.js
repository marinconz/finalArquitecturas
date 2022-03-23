import * as api from '../api'

export const getDevices = () => async (dispatch) => {
    try {
        const { data } = await api.fetchDevices();

        dispatch({type: 'FETCH_ALL', payload: data}) 

    } catch (error) {
        console.log(error.message)
    }
}

export const storeDevice = (post) => async (dispatch) => {
    try {
        const { data } = await api.storeDevice(post)

        dispatch({type: 'CREATE', payload:data}) 

    } catch (error) {
        console.log(error.message)
    }
}

export const deleteDevice = (id) => async (dispatch) => {
    try {
        await api.deleteDevice(id);
        dispatch({type: 'DELETE', payload: id})
    } catch (error) {
        console.log(error)
    }
}