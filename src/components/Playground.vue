<script>
import InfoCard from './InfoCard.vue'

export default {
    name: 'Playground',
    components: {
        InfoCard
    },
    data() {
        return {
            rowData: [
                {
                    title: 'title1',
                    subTitle: 'subTitle1',
                    hashTags: ['js', 'react', 'frontend'],
                },
                {
                    title: 'title2',
                    subTitle: 'subTitle2',
                    hashTags: ['js', 'react', 'frontend'],
                },
                {
                    title: 'title3',
                    subTitle: 'subTitle3',
                    hashTags: ['js', 'react', 'frontend'],
                }
            ]
        }
    }
}
</script>

<template>
    <div class="playground">
        <h1>Components Playground</h1>
        <info-card title="UseMemo" subTitle="Javascript" />
    </div>
</template>
<style scoped>
.playground {
    height: 100vh;
    width: 95%;
    margin: 0 auto;
    padding: 1em;
    border-radius: .5em;
    background: linear-gradient(to bottom, rgb(98 97 97 / 54%) 0%, rgb(58 58 58 / 15%) 100%), radial-gradient(at top center, rgba(255, 255, 255, 0.40) 0%, rgba(0, 0, 0, 0.40) 120%) #989898;
    background-blend-mode: multiply, multiply;
    /* background-clip: content-box; */
}
</style>