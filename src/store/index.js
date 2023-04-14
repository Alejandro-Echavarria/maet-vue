import { createStore } from 'vuex'

export default createStore({
  state: {
    nombre: 'Manuel',
    apellido: 'Echavarria',
    count: 1
  },
  getters: {
    countProperties(state) {
      return state.nombre.length;
    }
  },
  mutations: {
    changeName(state, nombre) {
      state.nombre = nombre;
    },
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--; 
    }
  },
  actions: {
    changeName(context, nombre) {
      setTimeout(() => {

        console.log('Actualizando en la base de datos');
        context.commit('changeName', nombre);
      }, 1000);
    }
  },
  modules: {
  }
})
