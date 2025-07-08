<script setup>
import { ref } from "vue"
import { login } from "@/services/authServices.js"
import router from "@/router/index.js"
import {useToast} from "vue-toastification"

const toast = useToast()
const username = ref("")
const password = ref("")
const emit = defineEmits(['toggle-card'])

function emitToggle() {
  emit("toggle-card")
}

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
        class="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md" >
      Login
    </button>
    <button
        type="button" @click="emitToggle"
        class="bg-red-500 hover:bg-red-600 py-2 w-full text-white font-medium rounded-md" >
      No account? Signup
    </button>
  </form>
</template>
