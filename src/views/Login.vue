<script setup>
import { ref } from "vue"
import { login } from "@/services/authServices.js"
import router from "@/router/index.js"

const username = ref("")
const password = ref("")

async function handleLogin() {
  try {
    await login(username.value, password.value)
    await router.push("/dashboard")
  } catch (error) {
    alert("Login failed")
  }
}
</script>

<template>
  <form @submit.prevent="handleLogin" class="container auth-form" novalidate>
    <h2 class="form-title">Login</h2>

    <input
        type="text"
        placeholder="Username"
        required
        v-model="username"
        class="input"
        autocomplete="username"
        aria-label="Username"
    />

    <input
        type="password"
        placeholder="Password"
        required
        v-model="password"
        class="input"
        autocomplete="current-password"
        aria-label="Password"
    />

    <button type="submit" class="button-primary">Login</button>
  </form>
</template>

<style scoped>
.auth-form {
  max-width: 360px;
  margin-top: 3rem;
  padding: 2rem 2.5rem;
  border-radius: 12px;
  background-color: var(--color-background-soft);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--color-border);
}
</style>
