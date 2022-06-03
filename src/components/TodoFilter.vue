<template>
  <div class="my-3">
    <select
      class="form-control"
      v-model="limit"
      @change="fitlerTodoLimit(limit)"
    >
      <option selected disabled>Select</option>
      <option value="5">5</option>
      <option value="50">50</option>
      <option value="100">100</option>
      <option value="150">150</option>
      <option value="200">200</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      limit: null,
    };
  },
  methods: mapActions(["fitlerTodoLimit"]),
};
</script>

<style>
</style>