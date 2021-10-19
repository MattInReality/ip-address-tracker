<template>
  <home-header class="main-header">Hello World</home-header>
  <info-card class="main-info-card"></info-card>
</template>

<script>
import HomeHeader from "@/components/home-header.vue";
import InfoCard from '@/components/info-card';


export default {
  name: "App",
  components: {HomeHeader, InfoCard},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap");

:root {
  --vd-gray: hsl(0, 0%, 17%);
  --d-gray: hsl(0, 0%, 59%);
  --error-color: hsl(1, 100%, 50%)
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

#app {
  font-family: Rubik, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 1.8rem;
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(14, 1fr);
  grid-gap: 6rem;
}

.main-header {
  grid-row: 1 / span 7;
  grid-column: 1;
}

.main-info-card {
  grid-row: 5  / span 6;
  z-index: 10;
  grid-column: 1;
  justify-self: center;
}

</style>
