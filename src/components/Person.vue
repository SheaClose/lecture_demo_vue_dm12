<template>
  <router-link tag="ul" :to="`/details/${name}`">
    <li> Name: {{ name }} </li>
    <li> Year of Birth: {{ birth_year }} </li>
    <li> HeightL {{ height }} </li>
    <li> Weight: {{ mass }} </li>
  </router-link>
</template>

<script>
export default {
  props: ["name", "birth_year", "height", "mass"]
};
</script>

<style>
  li {
    list-style: none;
  }
</style>
