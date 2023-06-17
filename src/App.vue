<script setup>
import MessageCounter from '@/components/MessageCounter.vue'
import HtmlTags from '@/components/HtmlTags.vue'
</script>

<!-- boostrap and tailwind classes added -->
<template>
    <h1 class="ml-10 font-sans hover:font-serif">
        UnoCssa
    </h1>
    <h2 class="text-red-500 text-30px">Attibute Preset Element</h2>
    <h2 text="red-500 30px">Attibute Preset Element</h2>
    <div flex justify-between>
        <div>Left</div>
        <div>Right</div>
    </div>
  <div>
    Hello world 👋
  </div>
  <MessageCounter msg="Hello Component ✅" />
  <HtmlTags/>
</template>

<style scoped></style>
