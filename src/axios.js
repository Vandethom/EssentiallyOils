import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-essential-7fc0d.cloudfunctions.net/api'
    // 'http://localhost:5001/essential-7fc0d/us-central1/api'
});

export default instance;

