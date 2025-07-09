import axiosInstance from "@/api/axios.js";

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
        return await axiosInstance.post("/account/", {
            username: username.value,
            password: password.value,
            email: email.value,
        })
    } catch (error) {
        throw error
    }
 }