import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        "Content-Type": "application/json"
    }
})

export const get = (url, params) = instance.get(url, { params })
export const post = (url, data) = instance.post(url, data)
export const put = (url, data) = instance.put(url, data)
export const del = (url, data) = instance.delete(url, data)