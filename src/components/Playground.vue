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
                    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    hashTags: ['js', 'react', 'frontend'],
                },
                {
                    title: 'title2',
                    subTitle: 'subTitle2',
                    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    hashTags: ['js', 'abgular', 'frontend'],
                },
                {
                    title: 'title3',
                    subTitle: 'subTitle3',
                    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    hashTags: ['jsx', 'vue', 'frontend'],
                }
            ]
        }
    }
}
</script>

<template>
    <div class="playground">
        <h1>Components Playground</h1>
        <div class="card_wrapper">
            <info-card 
            v-for="row in rowData" 
            :title="row.title" 
            :subTitle="row.subTitle" 
            :contents="row.content"
            :tags="row.hashTags"
            />
        </div>
    </div>
</template>
<style scoped>
.playground {
    height: 100vh;
    width: 99%;
    margin: 0 auto;
    padding: 1em;
    border-radius: .5em;
    background: linear-gradient(to bottom, rgb(98 97 97 / 54%) 0%, rgb(58 58 58 / 15%) 100%), radial-gradient(at top center, rgba(255, 255, 255, 0.40) 0%, rgba(0, 0, 0, 0.40) 120%) #989898;
    background-blend-mode: multiply, multiply;
    /* background-clip: content-box; */
}
.card_wrapper{
    display: grid;
    grid-template-columns: var(--threeColGrid); 
    gap: 1em;
}

</style>