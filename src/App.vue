<template>
  <div id="app">
    <nav>
      <router-link tag="span" to="/">Home</router-link>
      <router-link tag="span" to="/jedi">Jedi</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      message: "Welcome to Your Vue.js App",
      test: "This is a test"
    };
  },
  computed: {
    test2() {
      return this.test + 2;
    }
  }
};
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  nav {
    display: flex;
    background-color: black;
    color: white;
    justify-content: space-around;
    padding: 10px;
  }
  nav span {
    cursor: pointer;
  }
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
