import axiosInstance from "@/api/axios.js";

export async function getProfile() {
    try {
        return await axiosInstance.get("/accounts/profile/")
    } catch (error) {
        throw error
    }
}

export async function editProfile(username, email, bio) {
    try {
        return await axiosInstance.patch('/accounts/profile/', {
            username: username,
            email: email,
            bio: bio,
        })
    } catch (error) {
        throw error
    }
}