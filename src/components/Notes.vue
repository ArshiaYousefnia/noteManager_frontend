<script setup>
import NoteCard from "@/components/NoteCard.vue";
import {getNotes, newNote} from "@/services/notesServices.js";
import {onMounted, ref} from "vue";
import {useToast} from "vue-toastification";

const toast = useToast()
let notes = ref([])

async function handle_newNote() {
  try {
    await newNote("dummy note", "dadsk123  ## 4")
    await updateNotes()

    toast.success("New note added")
  } catch (e) {
    toast.error("Error adding new note")
  }
}

async function updateNotes() {
  try {
    const response = await getNotes()
    notes.value = response.data

  } catch (error) {
    toast.error("Error fetching notes list")
  }
}

onMounted(async () => {
  await updateNotes()
})
</script>

<template>
  <div
      class="scroll-container mt-12 p-8 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-md max-w-m mx-auto min-w-96"
  >
    <button @click="handle_newNote" class="col-span-2 w-full p-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-sm transition">
      New Note
    </button>
    <div class="mt-4 h-96 overflow-y-auto">
      <NoteCard v-for="(item, index) in notes" :key="item.id || index" :data="item" @delete-note="updateNotes" @update-note="updateNotes"/>
    </div>
  </div>
</template>