<template>
  <form v-on:submit.prevent="handleSubmit">
    <label for="searchbox" class="search-label" aria-label="Search"></label>
    <div class="search-container">
      <input
          id="searchbox"
          v-model="search"
          class="search"
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
  </form>
  <p class="error" v-if="error">{{ error }}</p>
</template>

<script>
import {ref, watch} from "vue";
import {getIP, error, loading, clearError, setError} from "@/store/app.state";
import {validateIPAddress} from "../../lib/validators";


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
      const validIP = validateIPAddress(search.value)
      try {
        if (!validIP) {
          return setError('Please provide a valid IP address')
        }
        await getIP(search.value)
      } catch (e) {
        setError(e.message);
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
  width: 90vw;
  max-width: 50rem;
  justify-content: center;
  margin-bottom: 1rem;
}

.search {
  padding: 1.5rem 2.5rem;
  font-size: 1.4rem;
  width: inherit;
  max-width: inherit;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3) inset;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}

.search-label {
  visibility: hidden;
  height: 0;
}

button {
  background-color: #111;
  color: #cfcfcf;
  line-height: 1.6;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  font-size: 1.8rem;
  border-bottom-right-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  border-color: #111;
  cursor: pointer;
}

.error {
  color: var(--error-color);
  font-weight: 500;
  font-size: 1.4rem;
  background: white;
  -webkit-border-radius: 0.5rem;
  -moz-border-radius: 0.5rem;
  border-radius: 0.8rem;
  width: fit-content;
  padding: 0.3rem 1.2rem;
}


</style>