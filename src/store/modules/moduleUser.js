const moduleUser = {
  namespaced: true,

  state: {
    nombre: "Manuel",
    apellido: "Echavarria",
  },
  getters: {
    countProperties(state) {
      return state.nombre.length;
    },
  },
  mutations: {
    changeName(state, nombre) {
      state.nombre = nombre;
    },
  },
  actions: {
    changeName(context, nombre) {
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit("changeName", nombre);

          resolve();
        }, 1000);
      });
    },

    async confimationChangeNombre({ dispatch }, nombre) {
      await dispatch("changeName", nombre);
      console.log("Actualizando en la base de datos");
    },
  },
};

export default moduleUser;