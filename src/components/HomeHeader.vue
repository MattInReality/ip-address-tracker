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
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 40vh;
  min-height: 33rem;
  position: relative;
  padding-top: 0.5rem;
}


.title {
  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 3rem 0 1.5rem;
}

.main-info-card {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
}

.main-search {
  margin-bottom: 4rem;
}

@media screen and (min-width: 1024px) {
  .main-header {
    /*justify-content: center;*/
    max-height: 24rem;
  }
}

</style>