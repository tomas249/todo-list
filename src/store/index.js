import Vue from 'vue';
import Vuex from 'vuex';
import { todosMockData } from './mockData';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: todosMockData,
  },
  getters: {
    todoList(state) {
      return state.todos;
    },
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    COMPLETE_TODO(state, todo) {
      todo.completed = !todo.completed;
    },
  },
  actions: {
    addTodo(context, todo) {
      context.commit('ADD_TODO', todo);
    },
    completeTodo(context, todo) {
      context.commit('COMPLETE_TODO', todo);
    },
  },
});
