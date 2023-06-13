<template>
    <div>
        {{index}}.#{{ tag }}
    </div>
</template>

<script>
    export default {
        name:'infoTags',
        props:{
            tags: String,
            index: String
        }
    }
</script>

<style scoped>

</style>