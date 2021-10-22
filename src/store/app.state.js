import {reactive, computed} from "vue";
import {getIPLocation} from "../../lib/api-calls";

const state = reactive(
    {
        locationData: {},
        coords: [0, 0],
        error: '',
        loading: false
    })

function setLocationData(data) {
    state.locationData = {
        'IP Address': data.ip,
        'Location': Object.entries(data.location).map(([k, v]) => ['city', 'region', 'postalCode'].includes(k) ? v : undefined).join(' ').trim(),
        'Timezone': Object.entries(data.location).map(([k, v]) => k === 'timezone' ? 'UTC ' + v : undefined).join(' ').trim(),
        'ISP': data.isp,
    }

    const lat = data.location.lat ?? 0
    const lng = data.location.lng ?? 0
    state.coords = [lat, lng]
}


function setError(errorMessage) {
    state.error = errorMessage
}

function clearError() {
    state.error = ''
}

async function getIP(searchString = '') {
    state.loading = true
    try {
        const ipData = await getIPLocation(searchString)
        return setLocationData(ipData)

    } catch (e) {
        return setError(e.message)
    } finally {
        state.loading = false
    }
}

const locationData = computed(() => state.locationData)
const coords = computed(() => state.coords)
const error = computed(() => state.error)
const loading = computed(() => state.loading)


export {
    getIP,
    clearError,
    locationData,
    coords,
    error,
    loading,
}
