import axios from 'axios'

const api = axios.create({
    // baseURL: "http://localhost:8000/api/courses/",
    baseURL: "https://idg-backend.onrender.com/api/courses/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;