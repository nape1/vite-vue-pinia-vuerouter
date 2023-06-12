<script>
import InfoCard from './InfoCard.vue'

export default {
    name: 'Playground',
    components: {
        InfoCard
    }
}
</script>

<template>
    <div class="playground">

        <h1>Playground For Components for</h1>
        <InfoCard />
    </div>
</template>
<style scoped>
.playground{
    height: 100vh;
    width: 95%;
    margin:0 auto;
    padding: 1em;
    border-radius: .5em;
    background: linear-gradient(to bottom, rgb(98 97 97 / 54%) 0%, rgb(58 58 58 / 15%) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
 background-blend-mode: multiply,multiply;
 /* background-clip: content-box; */
}

</style>