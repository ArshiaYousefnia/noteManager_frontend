<script setup>
import {deleteNote} from "@/services/notesServices.js"
import {useToast} from "vue-toastification"

const props = defineProps({
  data: Object
})
const emit = defineEmits(["delete-note", "edit-note"]);

const toast = useToast()

async function handle_edit() {
  toast.info("Not there yet.")
}

async function handle_delete() {
  try {
    await deleteNote(props.data.uuid)
    emit("delete-note")
    toast.success("Note deleted successfully")
  } catch (e) {
  }
}
</script>

<template>
  <div
      class="mt-12 p-8 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-md max-w-sm mx-auto min-w-96"
  >
    <header> <strong>
      title: {{props.data.title}} </strong> </header>
    <header> <strong> uuid: {{props.data.uuid}} </strong> </header>
    <ul>
      <li>
        {{props.data.content}}
      </li>
      <li>
        created: {{props.data.updated_at}}
      </li>
      <li>
        last update: {{props.data.updated_at}}
      </li>
    </ul>
    <div>
      <button @click="handle_edit" class="col-span-2 w-full p-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-sm transition">
        Edit
      </button>
      <button @click="handle_delete" class="col-span-2 w-full p-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-sm transition">
        Delete
      </button>
    </div>
  </div>
</template>