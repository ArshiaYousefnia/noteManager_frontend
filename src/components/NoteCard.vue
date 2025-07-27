<script setup>
const props = defineProps({
  data: Object
})
</script>

<template>
  <div>
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
      <button>Edit</button>
      <button>Delete</button>
    </div>
  </div>
</template>