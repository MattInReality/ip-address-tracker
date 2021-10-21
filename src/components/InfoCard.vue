<template>
  <div class="info-card">
    <!-- TODO:   wrap this in a transition element-->
    <div class="info-container" v-if="!loading">
      <info-element class="info-item" v-for="[k,v] in Object.entries(locationData)" :heading="k" :data="v"
                    :key="v"></info-element>

    </div>
  </div>
</template>

<script>
import {locationData, loading} from '@/store/app.state';
import infoElement from '@/components/InfoElement';


export default {
  name: 'info-card',
  components: {
    infoElement
  },
  setup() {


    return {locationData, loading}
  }
}
</script>

<style scoped>
.info-card {
  -webkit-border-radius: 2.5rem;
  -moz-border-radius: 2.5rem;
  border-radius: 2.5rem;
  background-color: #fff;
  width: 95vw;
  max-width: 110rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  padding: 1rem;
  min-height: 16rem;
}

.info-container {
  padding: 2rem;
  width: 100%;
  height: 100%;
  display: grid;

  justify-content: space-around;
  align-items: center;
  opacity: 0;
  -webkit-animation: fade-in 1s linear forwards;
  -o-animation: fade-in 1s linear forwards;
  animation: fade-in 0.5s linear;
  animation-fill-mode: forwards;

}

.info-item {
  justify-self: stretch;
  align-self: stretch;
}

@media screen and (min-width: 701px) {
  .info-container {
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  }

  .info-item:nth-of-type(odd) {
    border-right: 1px solid rgba(0, 0, 0, 0.5);
  }
}

@media screen and (min-width: 1000px) {
  .info-container {
    grid-template: 1fr / repeat(4, 1fr);
  }

  .info-item:nth-child(2) {
    border-right: 1px solid rgba(0, 0, 0, 0.5);
  }
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