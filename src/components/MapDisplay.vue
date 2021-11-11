<template>
  <div class="map-wrapper">
    <map-loader v-if="loading"></map-loader>
    <l-map class="map-id" :options="mapOptions" v-model="zoom"
           v-model:zoom="zoom"
           :min-zoom="minZoom"
           :max-zoom="maxZoom"
           :center="mapCenter">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
      <l-marker v-if="!loading" class="map-markers" :lat-lng="mapCenter">
        <l-icon :icon-url="iconUrl" :icon-size="iconSize"></l-icon>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import {computed, ref} from "vue";
import "leaflet/dist/leaflet.css"
import {coords, loading} from "@/store/app.state";
import {LMap, LTileLayer, LMarker, LIcon} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import MapLoader from "@/components/MapLoader";

export default {
  name: 'map-display',
  components: {LMap, LTileLayer, LMarker, LIcon, MapLoader},

  setup() {
    const zoom = ref(15)
    const minZoom = ref(10)
    const maxZoom = ref(19)
    const mapCenter = coords
    const iconWidth = ref(50)
    const iconHeight = ref(60)
    const mapOptions = {
      dragging: true,
      touchZoom: 'center',
      zoomControl: false,
      inertia: true,
      bounceAtZoomLimits: true,
    }
    const getZoom = computed(() => {
      if (zoom.value >= 5 && zoom.value <= 19) {
        return zoom.value
      }
      return zoom.value < 5 ? 5 : 19
    })

    const iconUrl = computed(() => '/icon-location.svg')
    const iconSize = computed(() => [iconWidth.value, iconHeight.value])

    return {zoom, getZoom, mapCenter, iconUrl, iconSize, loading, mapOptions, minZoom, maxZoom}

  }
}
</script>

<style scoped>

.map-id {
  height: 100%;
  width: 100%;
}

.map-markers {
  z-index: 500;
  width: 100%;
}

</style>