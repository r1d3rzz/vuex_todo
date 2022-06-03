<template>
  <div class="todos container">
    <div class="row">
        <div class="col-md-4" v-for="todo in myTodos" :key="todo.id">
            <div class="card bg-primary mb-5">
                <p class="card-header text-white py-3">{{todo.title}}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex"

export default {
    computed:mapGetters(["myTodos"]),
    methods:mapActions(['getTodos']),
    mounted(){
        this.getTodos();
    }
}
</script>

<style>

</style>