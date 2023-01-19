<script setup>
import UsersGrid from "../components/UsersGrid.vue";
import sourceData from "../data.json";
import { ref } from "vue";

const searchQuery = ref("");
const users = sourceData.users;
const columns = ["name", "bio"];
</script>

<template>
  <div class="actions">
    <form>
      <input name="query" v-model="searchQuery" placeholder="🔍 Search user" />
    </form>
  </div>
  <UsersGrid :users="users" :columns="columns" :searchQuery="searchQuery" />
</template>

<style>
.actions {
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  margin-bottom: 8px;
}

form img {
  background-color: #42b983;
  width: 5%;
}
</style>
