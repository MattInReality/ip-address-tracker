<template>
  <l-map class="map-id" v-model="zoom" v-model:zoom="zoom" :center="
  mapcenter">
    <l-tile-layer style="height: 100%" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
    <l-geo-json :geojson="geojson" :options="geojsonOptions"/>
  </l-map>
</template>

<script>
import {ref} from "vue";
import "leaflet/dist/leaflet.css"
import {coords} from "@/store/app.state";
import {LMap, LGeoJson, LTileLayer} from "@vue-leaflet/vue-leaflet";

export default {
  name: 'map-display',
  components: {LMap, LGeoJson, LTileLayer},
  setup() {
    const zoom = ref(18)
    let mapcenter = coords
    const geojson = {
      type: "FeatureCollection",
      features: [
        // ...
      ],
    }


    const geojsonOptions = {};

    return {zoom, mapcenter, geojson, geojsonOptions}

  }
}
</script>

<style scoped>

.map-id {
  min-height: 100rem;
  width: 100vw;
}

</style>