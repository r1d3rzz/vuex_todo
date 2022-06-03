<template>
  <div>
    <form @submit.prevent="addNewTodo">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Type Your Todo"
          v-model="newTodo.title"
          required
        />
        <button class="btn btn-primary">Add Todo</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      newTodo: {
        title: "",
      },
    };
  },
  methods: {
    ...mapActions(["AddTodo"]),
    addNewTodo() {
      this.AddTodo(this.newTodo);
      this.newTodo.title = "";
    },
  },
};
</script>

<style>
</style>