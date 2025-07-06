import axios from "axios"
import {refreshToken, logout} from "@/services/authServices.js"

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("access_token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    response => response,
    async (error) => {
        const originalRequest = error.config

        if (!originalRequest._retry && error.response?.status === 401) {
            originalRequest._retry = true
            try {
                const token = await refreshToken()
                axios.defaults.headers.common.Authorization = `Bearer ${token}`
                originalRequest.headers['Authorization'] = `Bearer ${token}`
                return axiosInstance(originalRequest)
            } catch (error) {
                logout()
                window.location.href = '/login'
            }
        }

        return Promise.reject(error)
    }
)

export default axiosInstance