<template>
  <div class="container">
    <input type="checkbox" v-on:change="onComplete" :checked="todo.completed" />
    <div class="text" :class="{ completed: todo.completed }">
      {{ todo.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: ['todo'],
  methods: {
    onComplete() {
      this.$store.dispatch('completeTodo', this.todo);
    },
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}

.container {
  padding: 1rem;
  display: flex;
  align-items: center;
}

input[type='checkbox'] {
  -webkit-appearance: none;
  width: 22px;
  height: 22px;
  background: white;
  border-radius: 0;
  border: 2px solid;
  margin-right: 12px;
  outline: 0;
}
input[type='checkbox']:checked {
  background: blue;
}

.text {
  width: 80%;
  padding: 10px;
  border: 1px solid;
}
</style>
