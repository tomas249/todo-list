<template>
  <div class="header-container">
    <div class="header">My todo's ({{ listCounter }})</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    listCounter() {
      return this.$store.getters.todoList.filter((t) => !t.completed).length;
    },
  },
};
</script>

<style scoped>
.header-container {
  background-color: orange;
  padding: 10px 0 10px 50px;
}
.header {
  width: 50%;
  border: 2px solid white;
  padding: 10px;
}
</style>
