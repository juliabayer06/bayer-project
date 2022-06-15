<script setup>
import MenuComp from "./components/MenuComp.vue";
</script>

<template>
  <MenuComp />
  <main>
    <RouterView />
  </main>
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  height: 100vh;
  font-weight: normal;
}
header {
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  height: 15%;
  font-size: 1.3rem;
  display: flex;
}
footer {
  background-color: rgb(80, 20, 110);
  color: rgba(158, 210, 243, 0.945);
  height: 5%;
  font-size: 1.3rem;
}
main {
  height: 80%;
  background-color: rgba(80, 20, 110, 0.474);
  color: rgba(0, 0, 0, 0.649);
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
