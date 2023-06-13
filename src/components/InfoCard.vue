<template>
    <div class="card">
        <h5 class="text_elipsis">{{ subTitle }}</h5>
        <h2>{{ title }}</h2>
        <div class="content">{{ contents }}</div>
        <div class="tag_wrapper">
            <InfoTags
            v-for="(tag, index) in tags"
            :key="index"
            :title="tag"
            />
        </div>
    </div>
</template>

<script>
    import InfoTags from './InfoTags.vue';
    
    export default {
    name: "InfoCard",
    components: [InfoTags],
    props: {
        title: String,
        subTitle: String,
        contents: String,
        tags: Array,
    },
    data() {
        return {
            hashTags: ["js", "react", "frontend"]
        };
    },
    components: { InfoTags }
}
</script>

<style scoped>

.card{
    /* display: inline-flex; */
    /* margin:0 auto; */
    /* margin-block-end: .5em; */
    /* flex-direction: column; */
    letter-spacing: .020em;
    padding: .5em 1em;
    border-radius: .5em;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
    /* max-width: 31%; */
    /* min-width: 250px; */
    /* min-height: 5em; */
    cursor: pointer;
    background-color: #2b2b2b;
    user-select: none;
    position: relative;
}
.content{
    max-height: calc(100% - 50px);
    overflow: hidden;
}
h5{
    font-weight: normal;
    align-self: flex-start;
    color: #e1e1e1;
    background-color: #138381;
    padding: .1em .15em;
    border-radius: .25em;
    position: absolute;
    inset: 0 0 auto auto;
    max-width: 100px;
}
@media (prefers-color-scheme: dark) {
  .card {
    background-color: #212121;
  }
  h5{
    color: #e1e1e1;
    background-color: #138381;
  }
}
.tag_wrapper{
    display: flex;
}
</style>