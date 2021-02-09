<template>
  <div class="todo-list">
    <div v-for="todo in todoList" :key="todo.id">
      <Todo :todo="todo" />
    </div>
    <AddTodo />
  </div>
</template>

<script>
import Todo from './Todo';
import AddTodo from './AddTodo';

export default {
  name: 'Todos',
  components: {
    Todo,
    AddTodo,
  },
  computed: {
    todoList() {
      return this.$store.getters.todoList;
    },
  },
};
</script>

<style scoped>
.todo-list {
  border: 2px solid;
}
.todo-list div {
  border-bottom: 1px solid lightskyblue;
}
.todo-list div:last-child {
  border: none;
}
</style>
