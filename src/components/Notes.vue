<script setup>
import NoteCard from "@/components/NoteCard.vue";

const items = []
</script>

<template>
  <div>
    <button>New Note</button>
    <div>
      <NoteCard v-for="(item, index) in items" :key="index" :data="item"/>
    </div>
  </div>
</template>