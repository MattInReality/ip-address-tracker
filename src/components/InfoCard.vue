<template>
  <div class="info-card">
    <div class="info-container">
      <info-element class="info-item" v-for="(f, i) in fields" :heading="f" :data="locationData[f]"
                    :loading="loading"
                    :key="i">
      </info-element>

    </div>
  </div>
</template>

<script>
import {locationData, loading} from '@/store/app.state';
import infoElement from '@/components/InfoElement';

export default {
  name: 'info-card',
  components: {
    infoElement,
  },
  setup() {
    const fields = ['IP Address', 'Location', 'Timezone', 'ISP']

    return {locationData, loading, fields}
  }
}
</script>

<style scoped>
.info-card {
  border-radius: 1.5rem;
  background-color: #fff;
  width: 90vw;
  max-width: 110rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  min-height: 16rem;
  height: fit-content;
  z-index: 999;
}

.info-container {
  margin: 1rem;
  padding: 0 2rem;
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: space-around;
  align-items: center;
  opacity: 0;
  animation: fade-in 0.5s linear;
  animation-fill-mode: forwards;

}

.info-item {
  justify-self: stretch;
  align-self: stretch;
  opacity: 0;
  animation: fade-in 0.5s linear;
  animation-fill-mode: forwards;
  margin-top: 1rem;
  margin-bottom: 1rem;
  position: relative;
}

@media screen and (min-width: 768px) {
  .info-container {
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    padding: 1rem 2rem;
  }

  .info-item {
    padding: 2rem;
    margin: 0;
  }

  .info-item:nth-child(-n+2) {
    padding-bottom: 2rem;
  }

  .info-item:nth-child(-n+2):before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 75%;
    z-index: 10;
    border-bottom: 1px solid #afafaf;
  }

  .info-item:after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 75%;
    z-index: 10;
    border-right: 1px solid #afafaf;
  }

  .info-item:nth-of-type(even):after {
    content: none;
  }
}

@media screen and (min-width: 1000px) {
  .info-container {
    grid-template: 1fr / repeat(4, 1fr);
  }

  .info-item:nth-child(2):after {
    content: '';
  }

  .info-item:nth-child(-n+2):before {
    content: none;
  }
}


</style>