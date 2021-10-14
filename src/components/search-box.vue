<template>
  <form action="submit" @submit.prevent>
    <input
      v-model="search"
      class="search"
      type="text"
      placeholder="Search any IP address or domain"
    />
    <button type="submit">
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
        <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" />
      </svg>
    </button>
  </form>
</template>

<script>
export default {
  name: "search-box",
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style scoped>
.search {
  padding: 1.4rem 2.8rem;
  font-size: 1.8rem;
  line-height: 1.6;
  width: 95vw;
  max-width: 60rem;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}

button {
  background-color: #111;
  color: #cfcfcf;
  line-height: 1.6;
  padding: 1.4rem 2rem;
  font-size: 1.8rem;
  border-bottom-right-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  border: none;
}
</style>