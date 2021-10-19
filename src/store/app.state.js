import {reactive, computed} from "vue";
import {getIPLocation} from "../../lib/api-calls";

const state = reactive(
    {
        locationData: {},
        error: '',
        loading: false
    })

function setLocationData(data) {
    console.log('update IP location data')
    state.locationData = data
}

function clearLocationData() {
    state.locationDate = undefined
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
        clearLocationData()
        const ipData = await getIPLocation(searchString)
        return setLocationData(ipData)

    } catch (e) {
        return setError(e.message)
    } finally {
        state.loading = false
    }
}

const locationData = computed(() => state.locationData)
const error = computed(() => state.error)
const loading = computed(() => state.loading)

export {
    getIP,
    clearError,
    locationData,
    error,
    loading
}
