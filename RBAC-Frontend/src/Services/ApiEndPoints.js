import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        "Content-Type": "application/json"
    }, withCredentials: true
})

export const get = (url, params) => instance.get(url, { params })
export const post = (url, data) => instance.post(url, data)
export const put = (url, data) => instance.put(url, data)
export const del = (url, data) => instance.delete(url, data)

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
},
);

// Add a response interceptor
axios.interceptors.response.use(function onFulfilled(response) {
    console.log("Interceptor response: ", response);
    return response;
}, function onRejected(error) {
    console.log("Interceptor error: ", error);
    return Promise.reject(error);
});