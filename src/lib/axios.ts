import axios from 'axios'

const api = axios.create({
    // baseURL: "http://localhost:8000/api/courses/",
    baseURL: "https://api.idigitalstudies.com/api/courses/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;