<script setup>
import { ref } from 'vue'
import EditProfileCard from "@/components/EditProfileCard.vue";
import ProfileCard from "@/components/ProfileCard.vue";

const showProfileCard = ref(true)

const toggleCard = () => {
  showProfileCard.value = !showProfileCard.value
}
</script>

<template>
  <div class="min-h-screen bg-gray-900 flex items-center justify-center">
    <transition
        mode="out-in"
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95">
      <ProfileCard @toggleProfile="toggleCard" v-if="showProfileCard"/>
      <EditProfileCard @toggleProfile="toggleCard" v-else/>
    </transition>
  </div>
</template>
