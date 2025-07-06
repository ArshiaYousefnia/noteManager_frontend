import axiosInstance from "@/api/axios.js";

export async function getProfile() {
    try {
        return await axiosInstance.get("/accounts/profile/")
    } catch (error) {
        alert("something went wrong");
    }
}