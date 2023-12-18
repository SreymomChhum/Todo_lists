<template>
  <div class="form">
    <h1>Form</h1>
    <form action="">
        <input type="text" placeholder="name">
        <input type="text" placeholder="email">
        <input type="number" placeholder="age">
    </form>
    <ListItem v-for="(data, index) in $store.state.todos" :key="index">{{ data.title }}</ListItem>
  </div>
</template>

<script>
  import ListItem from './ListItem.vue'
  export default {
    name: 'TodoForm',
    components: {
      ListItem,
    }
  }
</script>

<style scoped>  
  .form{
    border: 1px solid grey;
  }

</style>