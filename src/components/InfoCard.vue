<template>
    <div class="card">
        <h2>{{ title }}</h2>
        <h5>{{ subTitle }}</h5>
        <Tags 
            v-for="(tag, index) in hashTags"
            :key="tag"
            :index="index"
            :tags="hashTags"
        />
    </div>
</template>

<script>
    import Tags from './Tags.vue'
    export default {
        name:'InfoCard',
        components:[Tags],
        props:{
            title: String,
            subTitle: String
        },
        data(){
            return {
                hashTags: ['js', 'react', 'frontend']
            }
        }
    }
</script>

<style scoped>

.card{
    display: flex;
    flex-direction: column;
    letter-spacing: .020em;
    padding: .5em 1em;
    border-radius: 1em;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
    max-width: 32vw;
    min-width: 280px;
    min-height: 5em;
    cursor: pointer;
    background-color: #2b2b2b;
    user-select: none;
}

h5{
    font-weight: normal;
    align-self: flex-start;
    color: #8c8c8c;
}
@media (prefers-color-scheme: dark) {
  .card {
    background-color: #212121;
  }
  h5{
    color: #565656;
  }
}
</style>