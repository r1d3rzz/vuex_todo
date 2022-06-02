export default {
  state: {
    todos: [
      { title: "Title 1", id: 1 },
      { title: "Title 2", id: 2 },
      { title: "Title 3", id: 3 },
    ],
  },
  getters: {
    myTodos(state) {
      return state.todos;
    },
  },
  mutations: {},
  actions: {},
};
