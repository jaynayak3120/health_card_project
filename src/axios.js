import axios from 'axios';

const token = localStorage.getItem('token')

const axiosInstant = axios.create({
    baseURL: 'http://localhost:3001/api/',
    headers: {
        'authorization': token ? `Bearer ${token}` : null,
    }
})

export default axiosInstant;
