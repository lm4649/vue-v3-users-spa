<script setup>
import { RouterLink } from "vue-router";
import sourceData from "../data.json";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const users = sourceData.users;
</script>

<template>
  <nav>
    <RouterLink to="/">Back to users</RouterLink>
  </nav>
  <br />
  <div v-if="users[props.id - 1]" class="card">
    <img
      :src="`/images/${users[props.id - 1].picture}`"
      :alt="users[props.id - 1].name"
    />
    <h1>{{ users[props.id - 1].name }}</h1>
    <hr />
    <br />
    <p>{{ users[props.id - 1].bio }}</p>
  </div>
  <div v-else>
    <p>User not found</p>
  </div>
</template>
