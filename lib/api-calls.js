import {validateDomain, validateIPAddress} from './validators';
//TODO rework this module to call process.env instead of ipGeoKey
// import ipGeoKey from "../keys";


function createQueryKey(query) {
    return validateIPAddress(query) ? 'ipAddress' : validateDomain(query) ? 'domain' : ''
}

async function getIPLocation(query) {
    const queryString = createQueryKey(query)
    const ipData = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${ipGeoKey}&${queryString}=${queryString}`)
    return await ipData.json()
}

export {
    getIPLocation,
    createQueryKey
}