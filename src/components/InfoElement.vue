<template>
  <div class="info-item">
    <!--    TODO: Add loader-->
    <h2 class="info-heading">{{ heading }}</h2>
    <p class="info-data">{{ data }}</p>
  </div>
</template>

<script>

export default {
  name: 'info-element',
  props: {
    heading: String,
    data: String
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
}

@media screen and (min-width: 1000px) {
  .info-item {
    text-align: left;
  }

}


</style>