<template>
  <home-header class="main-header">Hello World</home-header>
  <info-card class="info-card"></info-card>
  <map-display class="map-card"></map-display>
</template>

<script>
import {onMounted} from "vue";

import HomeHeader from "@/components/HomeHeader.vue";
import MapDisplay from "@/components/MapDisplay";
import InfoCard from "@/components/InfoCard";
import {getIP} from "@/store/app.state";


export default {
  name: "App",
  components: {HomeHeader, InfoCard, MapDisplay},
  setup() {
    onMounted(() => {
      getIP()
    })


  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap");

:root {
  --vd-gray: hsl(0, 0%, 17%);
  --d-gray: hsl(0, 0%, 59%);
  --error-color: hsl(1, 100%, 50%);
  --app-height: 100vh;
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
  grid-template-rows: repeat(2, 10rem) auto auto repeat(6, 1fr);
}

.main-header {
  grid-row: 1 / span 3;
  grid-column: 1;
  z-index: 750;
}

.info-card {
  grid-row: 3 / span 2;
  grid-column: 1;
  z-index: 999;
  place-self: center;
  height: max-content;

}

.map-card {
  grid-row: 4 / -1;
  grid-column: 1;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>
