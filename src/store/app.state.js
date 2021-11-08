import {reactive, computed} from "vue";

const state = reactive(
    {
        locationData: {},
        coords: [0, 0],
        error: '',
        loading: false
    })

function setLocationData(data) {
    const {ip, city, state_prov, postalCode, time_zone, latitude, longitude, isp} = data;
    state.locationData = {
        'IP Address': ip,
        'Location': `${city}, ${state_prov}${postalCode ? `, ${postalCode}` : ''}`,
        'Timezone': `UTC ${time_zone.offset.toString().padStart(2, '0')}:00`,
        'ISP': isp,
    }
    state.coords = [latitude, longitude]
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
