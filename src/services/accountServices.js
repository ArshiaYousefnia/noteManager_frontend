import axiosInstance from "@/api/axios.js";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function getAccount() {
    try {
        return await axiosInstance.get("/account/")
    } catch (error) {
        throw error
    }
}

export async function editAccount(username, email, bio) {
    try {
        return await axiosInstance.patch('/account/', {
            username: username,
            email: email,
            bio: bio,
        })
    } catch (error) {
        throw error
    }
}

 export async function createAccount(username, email, password) {
    try {
        return await axios.post(`${BASE_URL}/account/`, {
            username: username,
            password: password,
            email: email,
        })
    } catch (error) {
        throw error
    }
 }