<template>
    <span>
        #{{ title }}
    </span>
</template>

<script>
    export default {
        name:'InfoTags',
        props:{
            title: String,
        }
    }
</script>

<style scoped>
span{
    cursor: pointer;
    margin: 0 .15em;
    padding: 0 .15em;
    color: #8c8c8c;
    border-radius: .3em;
    font-size: .75em;
    font-weight: bold;
    letter-spacing: .04em;
    background-color: #333333;
}
</style>