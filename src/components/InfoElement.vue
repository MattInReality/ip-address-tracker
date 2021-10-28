<template>
  <div class="info-item">
    <h2 class="info-heading">{{ heading }}</h2>
    <text-loader v-if="loading"></text-loader>
    <p v-else class="info-data">{{ data }}</p>
  </div>
</template>

<script>
import TextLoader from "@/components/TextLoader";

export default {
  name: 'info-element',
  components: {
    TextLoader,
  },
  props: {
    heading: String,
    data: String,
    loading: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>

.info-item {
  margin: 0.5rem 1rem;
  padding: 0 1rem;
}

.info-item > * {
  margin-bottom: 0.8rem;
}

.info-heading {
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  color: #aaa;
}

.info-data {
  font-size: 2.3rem;
  font-weight: 500;
  color: #1f1f1f;
  opacity: 0;
  animation: fade-in 1s;
  animation-fill-mode: forwards;
}

@media screen and (min-width: 1000px) {
  .info-item {
    text-align: left;
  }

}


</style>