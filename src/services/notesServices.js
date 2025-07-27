import axiosInstance from "@/api/axios.js";

export async function getNotes() {
    try {
        return await axiosInstance.get("/notes")
    } catch (error) {
        throw error
    }
}

export async function newNote(title, content) {
    try {
        return await axiosInstance.post("/notes", {
            title: title,
            content: content
        })
    } catch (error) {
        throw error
    }
}

export async function getNote(uuid) {
    try {
        return await axiosInstance.get("/notes/" + uuid + "/")
    } catch (error) {
        throw error
    }
}

export async function editNote(uuid, title, content) {
    try {
        return await axiosInstance.patch("/notes/" + uuid + "/", {
            title: title,
            content: content
        })
    } catch (error) {
        throw error
    }
}

export async function deleteNote(uuid) {
    try {
        return await axiosInstance.delete("/notes/" + uuid + "/")
    } catch (error) {
        throw error
    }
}