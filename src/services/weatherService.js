import axios from 'axios';

export const getWeather = async () => {
    const response = await axios({
        method: 'GET',
        url: 'http://localhost:8090/temp'
    })

    return response.data;
}

export const getCurrentDate = async () => {
    const response = await axios({
        method: 'GET',
        url: 'http://localhost:8090/date/current-date'
    })

    return response.data;
}