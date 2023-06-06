<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MessageCounter from './components/MessageCounter.vue'
</script>

<template>
  <div>
    Hello world 👋
  </div>
  <MessageCounter msg="Hello Component ✅" />
  <ul>
    <li><RouterLink to="/">Home</RouterLink></li>
    <li><RouterLink to="/about">About</RouterLink></li>
    <li><RouterLink to="/fournotfour">404Page</RouterLink></li>
    <li><RouterLink to="/textElements">TextElements</RouterLink></li>
  </ul>
  <div>
    <RouterView />
  </div>

</template>

<style scoped></style>
