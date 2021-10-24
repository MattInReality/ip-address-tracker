<template>
  <header class="main-header">
    <h1 class="title">IP Address Tracker</h1>
    <search-box class="main-search"></search-box>
    <info-card class="main-info-card"></info-card>
  </header>
</template>

<script>
import searchBox from "@/components/SearchBox.vue";
import InfoCard from "@/components/InfoCard";

export default {
  name: "home-header",
  components: {
    searchBox,
    InfoCard
  },
};
</script>

<style scoped>
.main-header {
  background-image: url("~@/assets/pattern-bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  min-height: 30vh;
  justify-content: center;
  align-items: center;
  position: relative;
}

.title {
  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;
  grid-row: 1;
  margin: 3rem 0;
}

.main-search {
  grid-row: 2;
  justify-self: center;
  margin-bottom: 3rem;
}

.main-info-card {
  margin-bottom: -18rem;
}

</style>