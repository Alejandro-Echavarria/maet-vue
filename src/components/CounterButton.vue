<template>
    <h1>Hola desde el componente nuevo</h1>
    <button @click="decrement()">
        -
    </button>
    {{ counter }}
    <button @click="increment()">
        +
    </button>
</template>

<script>
export default {
    data() {
        return {
        counter: 0
        }
    },
    methods: {
        increment() {
            this.counter++;
        },
        decrement() {
            this.counter--;
        }
    }
}
</script>

<style scoped>
    h1{
        color: red;
    }
</style>