<template>
  <form v-on:submit.prevent="addTodo">
    <input
      type="text"
      name="todoText"
      autocomplete="off"
      placeholder="Add a new todo (hit enter to add)"
    />
  </form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'AddTodo',
  methods: {
    addTodo(e) {
      let text = e.target.elements.todoText.value.trim();
      if (!text) return;

      this.$store.dispatch('addTodo', {
        id: uuidv4(),
        completed: false,
        text,
      });
      e.target.reset();
    },
  },
};
</script>

<style scoped>
input {
  width: 81%;
  padding: 10px;
  margin: 10px 0 10px 20px;
  border: 1px solid;
}
</style>
