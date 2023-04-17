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

// import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapGetters, mapActions } = createNamespacedHelpers('user');
const { mapMutations: mapCounterMutations, mapState: mapCounterState } = createNamespacedHelpers('counter');

export default {

    data() {
        return {
            nameUser: '',
        }
    },
    methods: {
        ...mapCounterMutations({
            increment: 'increment',
            decrement:'decrement',
        }),
        ...mapActions([
            'confimationChangeNombre',
        ]),
        changeNameUser() {
            this.confimationChangeNombre(this.nameUser).then(() => {
                this.nameUser = '';
            });
        }
    },
    computed: {
        ...mapCounterState({
            count: 'count'
        }),
        ...mapState([
            'nombre',
            'apellido'
        ]),
        // ...mapState({
        //     nombre: state => state.user.nombre,
        //     apellido: state => state.user.apellido,
        //     count: state => state.counter.count
        // }),
        ...mapGetters([
            'countProperties'
        ])
    }
}
</script>

<style scoped>
    
</style>