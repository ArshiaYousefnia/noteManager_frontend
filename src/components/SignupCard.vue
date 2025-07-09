<script setup>
import { ref } from "vue"
import {useToast} from "vue-toastification"
import {createAccount} from "@/services/accountServices.js";

const toast = useToast()
const username = ref("")
const password = ref("")
const email = ref("")
const emit = defineEmits(['toggle-card'])

function emitToggle() {
  emit("toggle-card")
}

async function signUp() {
  try {
    const res = createAccount(username.value, email.value, password.value)

    if (res.status === 201) {
      toast.success("Signed Up Successfully")
      emit("toggle-card")
    } else {
      toast.error("Signup failed")
    }
  } catch (error) {
    toast.error("Signup failed")
  }
}
</script>

<template>
  <form
      @submit.prevent="signUp"
      class="max-w-sm mt-12 p-8 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-lg border border-gray-300 dark:border-gray-600 mx-auto space-y-5"
  >
    <h2 class="text-2xl font-semibold text-center text-gray-800 dark:text-gray-100">Sign Up</h2>

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
        type="email"
        placeholder="Email"
        required
        v-model="email"
        class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
        autocomplete="email"
        aria-label="Email"
    />

    <input
        type="password"
        placeholder="Password"
        required
        v-model="password"
        class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
        autocomplete="new-password"
        aria-label="Password"
    />
    <button
        type="submit"
        class="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md" >
      Signup
    </button>
    <button
        type="button" @click="emitToggle"
        class="bg-red-500 hover:bg-red-600 py-2 w-full text-white font-medium rounded-md" >
      Already have an account? Login
    </button>
  </form>
</template>
