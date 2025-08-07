<script setup>
const props = defineProps({
  data: Object
})
</script>

<template>
  <div
      class="mt-12 p-8 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-md max-w-sm mx-auto min-w-96"
  >
    <header> {{data.title}} </header>
    <header> {{data.uuid}} </header>
    <ul>
      <li>
        <strong> {{data.content}} </strong>
      </li>
      <li>
        <strong> {{data.updated_at}} </strong>
      </li>
      <li>
        <strong> {{data.updated_at}} </strong>
      </li>
    </ul>
    <div>
      <button class="col-span-2 w-full p-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-sm transition">
        Edit
      </button>
      <button class="col-span-2 w-full p-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-sm transition">
        Delete
      </button>
    </div>
  </div>
</template>