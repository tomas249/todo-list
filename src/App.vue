<template>
  <div id="app">
    <Header />
    <Todos />
  </div>
</template>

<script>
import Header from './components/Header';
import Todos from './components/Todos';

export default {
  name: 'App',
  components: {
    Header,
    Todos,
  },
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}
#app {
  height: 100%;
  width: 700px;
  margin: 100px auto 0;
}
</style>
