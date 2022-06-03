import axios from "axios";

export default {
  state: {
    todos: [],
  },
  getters: {
    myTodos(state) {
      return state.todos;
    },
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },

    setTodo(state, newTodo) {
      state.todos.unshift(newTodo);
    },

    deleteTodoItem(state, todoId) {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== todoId;
      });
    },
  },
  actions: {
    async getTodos({ commit }) {
      let res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      let todos = res.data;
      commit("setTodos", todos);
    },

    async AddTodo({ commit }, newTodo) {
      let res = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        newTodo
      );
      console.log(res.data);
      commit("setTodo", res.data);
    },

    async deleteTodo(context, todoId) {
      let res = await axios.delete(
        "https://jsonplaceholder.typicode.com/todos/" + todoId
      );
      context.commit("deleteTodoItem", todoId);
    },

    async fitlerTodoLimit(context, limit) {
      let res = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
      );
      context.commit("setTodos", res.data);
    },
  },
};
