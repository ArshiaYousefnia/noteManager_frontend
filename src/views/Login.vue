<script setup>
import {ref} from "vue"
import LoginCard from "@/components/LoginCard.vue"
import SignupCard from "@/components/SignupCard.vue"

const showLoginCard = ref(true)

const toggleCard = () => {
  showLoginCard.value = !showLoginCard.value
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
      <LoginCard @toggle-card="toggleCard" v-if="showLoginCard"/>
      <SignupCard @toggle-card="toggleCard" v-else/>
    </transition>
  </div>
</template>