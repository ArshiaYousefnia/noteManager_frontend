<script setup>
import { ref } from "vue"
import axiosInstance from "@/api/axios.js"
import router from "@/router/index.js"

const username = ref("")
const password = ref("")
const email = ref("")

async function signUp() {
  try {
    const res = await axiosInstance.post("/accounts/register/", {
      username: username.value,
      password: password.value,
      email: email.value,
    })

    if (res.status === 201) {
      await router.push("/login")
    }
  } catch (error) {
    alert("Signup failed")
  }
}
</script>

<template>
  <form @submit.prevent="signUp" class="container signup-form" novalidate>
    <h2 class="form-title">Sign Up</h2>

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
        type="email"
        placeholder="Email"
        required
        v-model="email"
        class="input"
        autocomplete="email"
        aria-label="Email"
    />

    <input
        type="password"
        placeholder="Password"
        required
        v-model="password"
        class="input"
        autocomplete="new-password"
        aria-label="Password"
    />

    <button type="submit" class="button-primary">Sign Up</button>
  </form>
</template>

<style scoped>
.signup-form {
  max-width: 360px;
  margin-top: 3rem;
  padding: 2rem 2.5rem;
  background-color: var(--color-background-soft);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  border: 1px solid var(--color-border);
}
</style>
