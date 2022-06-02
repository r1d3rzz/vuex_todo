<template>
  <div class="todos container">
    <div class="row">
        <div class="col-md-4" v-for="todo in myTodos" :key="todo.id">
            <div class="card bg-primary">
                <p class="card-header text-white">{{todo.title}}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import {mapGetters} from "vuex"

export default {
    computed:mapGetters(["myTodos"]),
    // mounted(){
    //     console.log(this.myTodos);
    // }
}
</script>

<style>

</style>