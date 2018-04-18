<template>
  <div>
    <h1>Jedi!</h1>
    <div class="jedi" :key="ind" v-for="(person, ind) in people">
      <Person :name="person.name" :birth_year="person.birth_year" :height="person.height" :mass="person.mass" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Person from "./Person";

export default {
  mounted() {
    axios.get("https://swapi.co/api/people").then(res => {
      this.people = res.data.results;
    });
  },
  data() {
    return {
      people: []
    };
  },
  components: {
    Person
  }
};
</script>

<style scoped>
  .jedi {
    display: inline-flex;
    width: 25vw;
    justify-content: space-around;
    border: 1px solid #ccc;
    padding: 20px;
    margin: 20px;
  }
</style>
