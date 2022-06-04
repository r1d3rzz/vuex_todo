<template>
  <div class="todos container">
    <div class="row mb-3">
      <div class="col-md">
        <AddTodo />
        <todo-filter />
      </div>
    </div>
    <div class="row">
      <div
        class="col-md-4 cardTodo"
        v-for="todo in myTodos"
        :key="todo.id"
        @dblclick="todoComplete(todo)"
      >
        <div
          class="card mb-5 p-2"
          :class="[todo.completed ? 'bg-success' : 'bg-primary']"
        >
          <div class="d-flex justify-content-between align-items-center">
            <div class="card-header text-white py-3">{{ todo.title }}</div>
            <div>
              <button
                class="btn btn-sm btn-danger"
                @click="deleteTodo(todo.id)"
              >
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AddTodo from "./AddTodo.vue";
import TodoFilter from "./TodoFilter.vue";

export default {
  components: { AddTodo, TodoFilter },
  computed: mapGetters(["myTodos"]),
  methods: {
    todoComplete(todo) {
      if (todo.completed) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }

      this.updateTodo(todo);
    },
    ...mapActions(["getTodos", "deleteTodo", "updateTodo"]),
  },
  mounted() {
    this.getTodos();
  },
};
</script>

<style>
.cardTodo {
  user-select: none;
}
</style>