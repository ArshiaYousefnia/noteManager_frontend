<script setup>
import { ref } from "vue"
import { login } from "@/services/authServices.js"
import router from "@/router/index.js"
import {useToast} from "vue-toastification";

const toast = useToast()
const username = ref("")
const password = ref("")

async function handleLogin() {
  try {
    await login(username.value, password.value)
    toast.success("Logged In successfully.")
    await router.push("/dashboard")
  } catch (error) {
    toast.error("Login failed")
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-900 flex items-center justify-center">
  <form
      @submit.prevent="handleLogin"
      class="max-w-sm mt-12 p-8 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-lg border border-gray-300 dark:border-gray-600 mx-auto space-y-5"
  >
    <h2 class="text-2xl font-semibold text-center text-gray-800 dark:text-gray-100">Login</h2>

    <input
        type="text"
        placeholder="Username"
        required
        v-model="username"
        class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
        autocomplete="username"
        aria-label="Username"
    />

    <input
        type="password"
        placeholder="Password"
        required
        v-model="password"
        class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
        autocomplete="current-password"
        aria-label="Password"
    />

    <button
        type="submit"
        class="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition"
    >
      Login
    </button>
  </form>
  </div>
</template>
