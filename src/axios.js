import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://xaviermodcom.firebaseio.com/',
});

export default instance;