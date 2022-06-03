<template>
  <div class="todos container">
    <div class="row mb-3">
      <div class="col-md">
        <AddTodo />
      </div>
    </div>
    <div class="row">
      <div class="col-md-4" v-for="todo in myTodos" :key="todo.id">
        <div class="card bg-primary mb-5 p-2">
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

export default {
  components: { AddTodo },
  computed: mapGetters(["myTodos"]),
  methods: mapActions(["getTodos", "deleteTodo"]),
  mounted() {
    this.getTodos();
  },
};
</script>

<style>
</style>