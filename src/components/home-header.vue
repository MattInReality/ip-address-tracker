<template>
  <header class="main-header">
    <h1 class="title">IP Address Tracker</h1>
    <search-box class="main-search"></search-box>
    <!--    <info-card class="info"></info-card>-->
  </header>
</template>

<script>
import searchBox from "@/components/search-box.vue";
import {locationData} from "@/store/app.state";
// import infoCard from '@/components/info-card';


export default {
  name: "home-header",
  components: {
    searchBox,
    // infoCard
  },
  setup() {

    return {locationData}
  }
};
</script>

<style scoped>
.main-header {
  background-image: url("~@/assets/pattern-bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /*min-height: 40rem;*/
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  /*position: relative;*/
}

.main-search {
  grid-row: 2;
  justify-self: center;
}

/*.info {*/
/*  position: absolute;*/
/*  bottom: 0;*/
/*  transform: translateY(50%);*/
/*  margin: 0 auto;*/
/*}*/

.title {
  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;
  grid-row: 1;
  align-self: end;
}
</style>