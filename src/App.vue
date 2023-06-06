<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MessageCounter from './components/MessageCounter.vue'
import HtmlTags from './components/HtmlTags.vue'
</script>

<template>
  <div>
    Hello world 👋
  </div>
  <ul>
    <li><RouterLink to="/">Home</RouterLink></li>
    <li><RouterLink to="/about">About</RouterLink></li>
    <li><RouterLink to="/fournotfour">404Page</RouterLink></li>
  </ul>
  <div>
    <RouterView />
  </div>
  <MessageCounter msg="Hello Component ✅" />
  <HtmlTags/>

</template>

<style scoped></style>
