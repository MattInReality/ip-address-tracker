<template>
  <header class="main-header">
    <h1 class="title">IP Address Tracker</h1>
    <search-box class="main-search"></search-box>
  </header>
</template>

<script>
import searchBox from "@/components/SearchBox.vue";

export default {
  name: "home-header",
  components: {
    searchBox
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
  position: relative;
  padding-top: 0.5rem;
}

.title {
  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 3rem 1.5rem;
}


</style>