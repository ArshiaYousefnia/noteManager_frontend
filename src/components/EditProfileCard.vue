<script setup>
import {onMounted, ref} from "vue";
import {editAccount, getAccount} from "@/services/accountServices.js";
import {useToast} from "vue-toastification";

const toast = useToast()
const username_ = ref(null)
const email_ = ref(null)
const bio_ = ref(null)
const username_edit = ref(null)
const email_edit = ref(null)
const bio_edit = ref(null)

const emits = defineEmits(['toggleProfile'])

const emitToggleProfile = () => {
  emits('toggleProfile')
}

async function handleEditProfile() {
  try {
    if (username_edit.value === username_.value && email_edit.value === email_.value && bio_edit.value === bio_.value) {
      toast.info("No change applied to save")
      return
    }
    await editAccount(username_edit.value, email_edit.value, bio_edit.value);
    toast.success("Profile edited")

    username_.value = username_edit.value
    email_.value = email_edit.value
    bio_.value = bio_edit.value

    emits('toggleProfile')
  } catch (err) {
    toast.error("Profile edit failed")
  }
}

onMounted(async () => {
  try {
    const response = await getAccount()
    const { username, email, bio } = response.data
    username_.value = username
    email_.value = email
    bio_.value = bio || ""

    username_edit.value = username_.value
    email_edit.value = email_.value
    bio_edit.value = bio_.value
  } catch (error) {
    toast.error('Error Fetching Profile')
  }
})
</script>

<template>
  <div class="mt-12 p-8 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-md max-w-sm mx-auto min-w-96">
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
      <button @click="emitToggleProfile" class="bg-blue-500 p-4 w-full hover:bg-blue-600 text-white font-semibold rounded-lg shadow-sm transition">
        Back
      </button>
    </div>
  </div>
</template>
