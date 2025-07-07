<script setup>
import { ref, onMounted } from 'vue'
import { getProfile, editProfile } from '@/services/accountServices.js'
import { logout } from "@/services/authServices.js";
import { useToast } from 'vue-toastification'
import router from "@/router/index.js"

const toast = useToast()
const username_ = ref(null)
const email_ = ref(null)
const bio_ = ref(null)
const username_edit = ref(null)
const email_edit = ref(null)
const bio_edit = ref(null)

const show_profile = ref(true)

async function handleLogout() {
  logout()
  toast.info("Logged out")
  await router.push("/login")
}

function toggleProfileCard() {
  show_profile.value = !show_profile.value

  if (!show_profile.value) {
    bio_edit.value = bio_.value
    username_edit.value = username_.value
    email_edit.value = email_.value
  }
}

async function handleEditProfile() {
  try {
    if (username_edit.value === username_.value && email_edit.value === email_.value && bio_edit.value === bio_.value) {
      toast.info("No change applied to save")
      return
    }
    await editProfile(username_edit.value, email_edit.value, bio_edit.value);
    toast.success("Profile edited")

    username_.value = username_edit.value
    email_.value = email_edit.value
    bio_.value = bio_edit.value

    show_profile.value = true
  } catch (err) {
    toast.error("Profile edit failed")
  }
}

onMounted(async () => {
  try {
    const response = await getProfile()
    const { username, email, bio } = response.data
    username_.value = username
    email_.value = email
    bio_.value = bio || ""
  } catch (error) {
    toast.error('Error Fetching Profile')
  }
})
</script>

<template>
  <div class="min-h-screen bg-gray-900 flex items-center justify-center">
    <transition
        mode="out-in"
        enter-active-class="transition-opacity duration-150"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-150"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0">
      <div
          v-if="show_profile" key="a" class="mt-12 p-8 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-md max-w-sm mx-auto min-w-96"
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
        <div class="grid grid-cols-3 gap-1 mt-6 max-w-md mx-auto">
          <button @click="handleLogout" class="col-span-2 w-full p-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-sm transition">
            Log out
          </button>
          <button @click="toggleProfileCard" class="bg-blue-500 p-4 w-full hover:bg-blue-600 text-white font-semibold rounded-lg shadow-sm transition">
            Edit
          </button>
        </div>
      </div>
      <div v-else key="b" class="mt-12 p-8 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-md max-w-sm mx-auto min-w-96">
        <header class="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">Edit Profile</header>
        <ul class="space-y-4">
          <li class="text-base bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition">
            <input v-model="username_edit" type="text" placeholder="Username" class="text-indigo-600 dark:text-indigo-400 mr-2"/>
          </li>
          <li class="text-base bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition">
            <input v-model="email_edit" type="text" placeholder="Email" class="text-indigo-600 dark:text-indigo-400 mr-2"/>
          </li>
          <li class="text-base bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition">
            <input v-model="bio_edit" type="text" placeholder="Bio" class="text-indigo-600 dark:text-indigo-400 mr-2"/>
          </li>
        </ul>
        <div class="grid grid-cols-3 gap-1 mt-6 max-w-md mx-auto">
          <button @click="handleEditProfile" class="col-span-2 w-full p-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-sm transition">
            Save
          </button>
          <button @click="toggleProfileCard" class="bg-blue-500 p-4 w-full hover:bg-blue-600 text-white font-semibold rounded-lg shadow-sm transition">
            Back
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>
