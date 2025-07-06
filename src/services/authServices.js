import axios from 'axios'

const AUTH_URL = `${import.meta.env.VITE_API_BASE_URL}/token/`

export async function login(username, password) {
    try {
        const response = await axios.post(`${AUTH_URL}`, {
            username: username,
            password: password,
        }
        )

        const {refresh, access} = response.data

        localStorage.setItem('access_token', access)
        localStorage.setItem('refresh_token', refresh)

        return response.data
    } catch (error) {
        console.error(error)
        throw error
    }
}

export async function refreshToken() {
    try {
        const response = await axios.post(`${AUTH_URL}refresh/`, {
            refresh: localStorage.getItem('refresh_token'),
        }
        )

        const {access} = response.data

        localStorage.setItem('access_token', access)

        return access
    } catch (error) {
        console.error(error)
        throw error
    }
}

export function logout() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
}