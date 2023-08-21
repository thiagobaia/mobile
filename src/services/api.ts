import axios from "axios";

export const api = axios.create({
    baseURL: 'http://192.168.15.45:1337',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});



