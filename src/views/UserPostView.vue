<template>
    <h1>Vista del post de {{ $route.params.post }} del usuario {{ $route.params.user }}</h1>
</template>

<script>
export default {
    mounted() {
        console.log(this.$route.params);
    }
}
</script>

<style scoped>
    
</style>