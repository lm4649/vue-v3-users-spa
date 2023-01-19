<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  users: Array,
  columns: Array,
  searchQuery: String,
});

const sortKey = ref("");
const sortOrders = ref(props.columns.reduce((o, key) => ((o[key] = 1), o), {}));

const filteredUsers = computed(() => {
  let { users, searchQuery } = props;
  if (searchQuery) {
    searchQuery = searchQuery.toLowerCase();
    users = users.filter((row) => {
      return String(row["name"]).toLowerCase().indexOf(searchQuery) > -1;
    });
  }

  const key = sortKey.value;
  if (key) {
    const order = sortOrders.value[key];
    users = users.slice().sort((a, b) => {
      a = key === "bio" ? a[key].length : a[key];
      b = key === "bio" ? b[key].length : b[key];
      return (a === b ? 0 : a > b ? 1 : -1) * order;
    });
  }
  return users;
});

function sortBy(key) {
  sortKey.value = key;
  sortOrders.value[key] *= -1;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function partialBio(str) {
  const words = str.split(" ");
  return words.slice(0, 5).join(" ");
}

function countExtraWords(str) {
  return str.split(" ").length - 5;
}
</script>

<template>
  <table v-if="users.length">
    <thead>
      <tr>
        <th
          v-for="key in columns"
          :key="key"
          @click="sortBy(key)"
          :class="{ active: sortKey == key }"
        >
          {{ capitalize(key) }}
          <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in filteredUsers" :key="entry.id">
        <td class="td-name">
          <img
            :src="`images/${entry.picture}`"
            :alt="entry.name"
            class="td-img"
          />
          <RouterLink :to="`/user/${entry.id}`">
            <div class="td-name-body">{{ entry.name }}</div>
          </RouterLink>
        </td>
        <td v-if="entry.bio.length > 5">
          {{ partialBio(entry.bio) }}...
          <span class="badge">+{{ countExtraWords(entry.bio) }}</span>
        </td>
        <td v-else>{{ entry.bio }}</td>
      </tr>
    </tbody>
  </table>
  <p v-else>No users found.</p>
</template>

<style scoped>
table {
  margin: 0 auto;
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  user-select: none;
}

tr {
  background-color: #f9f9f9;
}

.td-img {
  width: 40px;
  border-radius: 50%;
}

.td-name {
  display: flex;
  align-items: center;
}

.td-name-body {
  flex-grow: 1;
  padding: 0 24px;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}

.badge {
  background-color: #42b983;
  color: #fff;
  font-size: smaller;
  border-radius: 50%;
  padding: 4px;
  text-align: center;
  margin-left: 2px;
}
</style>
