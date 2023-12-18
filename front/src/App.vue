<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TodoLists />
    <TodoForm />
  </div>
</template>

<script>
import TodoLists from './components/TodoLists.vue';
import HelloWorld from './components/HelloWorld.vue'
import TodoForm from './components/TodoForm.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    TodoLists,
    TodoForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
