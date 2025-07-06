<script setup>
import { ref, onMounted } from 'vue'
import { getProfile } from '@/services/accountServices.js'

const username_ = ref(null)
const email_ = ref(null)
const bio_ = ref(null)

onMounted(async () => {
  try {
    const response = await getProfile()
    const { username, email, bio } = response.data
    username_.value = username
    email_.value = email
    bio_.value = bio || 'empty'
  } catch (error) {
    alert('Something went wrong')
  }
})
</script>

<template>
  <div class="container dashboard-card">
    <header class="form-title">Profile</header>
    <ul class="profile-list">
      <li><strong>Username:</strong> {{ username_ }}</li>
      <li><strong>Email:</strong> {{ email_ }}</li>
      <li><strong>Bio:</strong> {{ bio_ }}</li>
    </ul>
  </div>
</template>

<style scoped>
.dashboard-card {
  margin-top: 3rem;
  padding: 2rem 2.5rem;
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

.profile-list {
  list-style: none;
  padding-left: 0;
  margin-top: 1.5rem;
}

.profile-list li {
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.5;
  background: var(--color-background);
  padding: 1rem 1.25rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(60, 60, 60, 0.08);
  transition: background-color 0.3s ease;
}

.profile-list li strong {
  color: var(--vt-c-indigo);
  margin-right: 0.5rem;
}

.profile-list li:hover {
  background-color: var(--color-background-mute);
}
</style>
