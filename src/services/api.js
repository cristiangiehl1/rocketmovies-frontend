/*
    Axios allows us to make HTTP requests (POST, GET, DELETE, UPDATE)
        to the backend.
    Installing and importing the axios library:
    > npm install axios 
*/

import axios from "axios";


// We will configure communication settings with our API.
export const api = axios.create({
    baseURL: "https://rocketmovies-api-47kl.onrender.com"
})