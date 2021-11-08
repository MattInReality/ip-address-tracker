import {reactive, computed} from "vue";
// import {getIPLocation} from "../../lib/api-calls";

const state = reactive(
    {
        locationData: {},
        coords: [0, 0],
        error: '',
        loading: false
    })

function setLocationData(data) {
    const {city, region, postalCode, timezone, lat, lng} = data.location;
    state.locationData = {
        'IP Address': data.ip,
        'Location': `${city}, ${region}${postalCode ? `, ${postalCode}` : ''}`,
        'Timezone': `UTC ${timezone}`,
        'ISP': data.isp,
    }
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
    const myHeaders = new Headers()
    myHeaders.append('accept', 'application/json')
    try {
        const ipData = await fetch("http://localhost:9999/.netlify/functions/ipgeo", {
            method: 'POST',
            body: JSON.stringify({search: searchString}),
            headers: myHeaders
        })

        const data = await ipData.json()

        if (data.code) {
            switch (data.code) {
                case 403:
                    return setError(data.messages)
            }
            return setError('Not found, please try something else.')
        }
        return setLocationData(data)

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
    setError,
    loading,
}
