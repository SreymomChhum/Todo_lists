<template>
    <div class="test">
        <h1>List</h1>
        <HelloWorld msg="Hi hi"/>
    </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'

    export default {
        name: 'TodoList',
        components: {
            HelloWorld,
        }
    };
</script>