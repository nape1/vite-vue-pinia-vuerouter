<script setup>
import { onMounted } from 'vue';
import MessageCounter from './components/MessageCounter.vue'
import HtmlTags from './components/HtmlTags.vue'

import { useUserStore } from './stores/user'
import { storeToRefs } from 'pinia';

const useUser = useUserStore()
const { userName, isLoggedIn, isAdmin } = storeToRefs(useUser)

onMounted(() => { isAdmin.value = false })
</script>

<template>
  <h2>
    Hello {{ userName ?? 'world' }} {{isAdmin ? '🔥': '👋'}}
  </h2>
  <button @click="useUser.loginUser">Login</button>
  <button @click="useUser.logoutUser">Logout</button>
  <button @click="useUser.tooglePrivlage">Toogle Privilage</button>
  <MessageCounter msg="Hello Component ✅" />
  <HtmlTags/>
</template>

<style scoped></style>
