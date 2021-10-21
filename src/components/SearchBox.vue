<template>
  <form v-on:submit.prevent="handleSubmit">
    <div class="search-container">
      <input
          v-model="search"
          class="search"
          :class="{ 'input-error': error }"
          type="text"
          :disabled="loading"
          placeholder="Search any IP address or domain"
      />
      <button type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
          <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/>
        </svg>
      </button>
    </div>
    <!--    TODO sort layout shift issue related to the below element-->
    <p class="error" v-if="error">{{ error }}</p>
    <!--    <p v-if="locationData">{{ locationData }}</p>-->
  </form>
</template>

<script>
import {ref, watch} from "vue";
import {getIP, error, loading, clearError} from "@/store/app.state";


export default {
  name: "search-box",
  setup() {
    const search = ref("")

    if (error) {
      watch(search, function (newValue, oldValue) {
        if (oldValue.length === 0 && newValue.length > 0) {
          clearError()
        }
      })
    }


    async function handleSubmit() {
      clearError()
      try {
        await getIP(search.value);
        search.value = ""
      } catch (e) {
        console.log('error: ', e);
      }
    }

    return {search, handleSubmit, error, loading};
  },
}
;
</script>

<style scoped>

.search-container {
  display: flex;
  width: 95vw;
  max-width: 50rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.search {
  padding: 1.4rem 2.8rem;
  font-size: 1.8rem;
  width: inherit;
  max-width: inherit;
  line-height: 1.6;
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
  border-color: #111;
  cursor: pointer;
}

.error {
  color: var(--error-color);
}

.input-error {
  border-color: var(--error-color);
}


</style>