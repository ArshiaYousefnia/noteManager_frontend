<script setup>
import NoteCard from "@/components/NoteCard.vue";
import {getNotes} from "@/services/notesServices.js";
import {onMounted} from "vue";
import {useToast} from "vue-toastification";

const toast = useToast()
let items = []

async function handle_newNote() {
  toast.info("Not there yet.")
}

onMounted(async () => {
  try {
    const response = await getNotes()
    items = response.data

  } catch (error) {
    toast.error("Error fetching notes list")
  }
})
</script>

<template>
  <div
      class="scroll-container mt-12 p-8 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-md max-w-sm mx-auto min-w-96"
  >
    <button @click="handle_newNote" class="col-span-2 w-full p-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-sm transition">
      New Note
    </button>
    <div>
      <NoteCard v-for="(item, index) in items" :key="index" :data="item"/>
    </div>
  </div>
</template>