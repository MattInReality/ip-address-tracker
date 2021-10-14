<template>
  <home-header class="main-header">Hello World</home-header>
</template>

<script>
import HomeHeader from "@/components/home-header.vue";

export default {
  name: "App",
  components: { HomeHeader },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap");

:root {
  --vd-gray: hsl(0, 0%, 17%);
  --d-gray: hsl(0, 0%, 59%);
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
}
</style>
