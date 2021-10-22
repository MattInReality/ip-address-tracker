<template>
  <l-map class="map-id" v-model="zoom" v-model:zoom="zoom" min-zoom="10" max-zoom="20" :center="mapCenter">
    <l-tile-layer style="height: 100%" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
    <l-marker v-if="!loading" class="map-markers" :lat-lng="mapCenter">
      <l-icon :icon-url="iconUrl" :icon-size="iconSize"></l-icon>
    </l-marker>
  </l-map>
</template>

<script>
import {computed, ref} from "vue";
import "leaflet/dist/leaflet.css"
import {coords, loading} from "@/store/app.state";
import {LMap, LTileLayer, LMarker, LIcon} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  name: 'map-display',
  components: {LMap, LTileLayer, LMarker, LIcon},
  setup() {
    const zoom = ref(15)
    const mapCenter = coords
    const iconWidth = ref(50)
    const iconHeight = ref(60)
    const getZoom = computed(() => {
      if (zoom.value >= 5 && zoom.value <= 19) {
        return zoom.value
      }
      return zoom.value < 5 ? 5 : 19
    })

    const iconUrl = computed(() => '/icon-location.svg')
    const iconSize = computed(() => [iconWidth.value, iconHeight.value])

    return {zoom, getZoom, mapCenter, iconUrl, iconSize, loading}

  }
}
</script>

<style scoped>

.map-id {
  min-height: 100rem;
  width: 100vw;
}

.map-markers {
  z-index: 500;
  height: 100%;
  width: 100%;
}

</style>