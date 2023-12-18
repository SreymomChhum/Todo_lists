<template>
    <ul class="nav">
        <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link  class="nav-link" to="/user-card">Card</router-link >
        </li>
        <li class="nav-item">
            <router-link  class="nav-link" to="/user-list">List</router-link >
        </li>
    </ul>
    <RouterView />
</template>

<script>
    import { RouterLink, RouterView } from 'vue-router'
</script>