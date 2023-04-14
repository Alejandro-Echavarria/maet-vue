<template>
    <h1>Bienvenido al Blog</h1>
    <p>Mi nombre es {{ nombre }} {{ apellido }}</p>
    <p>El tamaño del nombre: {{ countProperties }}</p>
    <br>
    <div>
        <button @click="increment()">Incrementar</button>
        {{ count }}
        <button @click="decrement()">Disminuir</button>
    </div>
    <br>
    <form @submit.prevent="changeNameUser()">
        <input type="text" v-model="nameUser">
        <button>
            Actualizar
        </button>
    </form>
</template>

<script>

import { mapState, mapGetters, mapMutations } from 'vuex';

export default {

    data() {
        return {
            nameUser: '',
        }
    },
    methods: {
        ...mapMutations([
            'increment',
            'decrement',
        ]),
        changeNameUser() {
            this.$store.dispatch('changeName', this.nameUser);
            this.nameUser = '';
        }
    },
    computed: {
        ...mapState([
            'nombre',
            'apellido',
            'count',
        ]),
        ...mapGetters([
            'countProperties'
        ])
    }
}
</script>

<style scoped>
    
</style>