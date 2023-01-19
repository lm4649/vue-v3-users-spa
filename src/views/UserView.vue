<script setup>
import UserDetails from "../components/UserDetails.vue";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <main>
    <UserDetails :id="props.id" />
  </main>
</template>
