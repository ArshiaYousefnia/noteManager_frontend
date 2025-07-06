<script setup>
import { ref, onMounted } from 'vue'
import { getProfile } from '@/services/accountServices.js'
import { logout } from "@/services/authServices.js";
import { useToast } from 'vue-toastification'
import router from "@/router/index.js"

const toast = useToast()
const username_ = ref(null)
const email_ = ref(null)
const bio_ = ref(null)

async function handleLogout() {
  logout()
  toast.info("Logged out")
  await router.push("/login")
}

onMounted(async () => {
  try {
    const response = await getProfile()
    const { username, email, bio } = response.data
    username_.value = username
    email_.value = email
    bio_.value = bio || 'empty'
  } catch (error) {
    toast.error('Error Fetching Profile')
  }
})
</script>

<template>
  <div class="min-h-screen bg-gray-900 flex items-center justify-center">
  <div
      class="mt-12 p-8 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-md max-w-sm mx-auto min-w-96"
  >
    <header class="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">Profile</header>
    <ul class="space-y-4">
      <li class="text-base bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition">
        <strong class="text-indigo-600 dark:text-indigo-400 mr-2">Username:</strong> {{ username_ }}
      </li>
      <li class="text-base bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition">
        <strong class="text-indigo-600 dark:text-indigo-400 mr-2">Email:</strong> {{ email_ }}
      </li>
      <li class="text-base bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition">
        <strong class="text-indigo-600 dark:text-indigo-400 mr-2">Bio:</strong> {{ bio_ }}
      </li>
    </ul>
    <div class="mt-6 max-w-md mx-auto">
      <button @click="handleLogout" class="w-full p-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-sm transition">
        Log out
      </button>
    </div>
  </div>
  </div>
</template>
