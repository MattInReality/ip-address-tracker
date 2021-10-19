import {validateDomain, validateIPAddress} from './validators';
//TODO rework this module to call process.env instead of ipGeoKey
import ipGeoKey from "../keys";


function createQueryString(query) {
    return validateIPAddress(query) ? 'ipAddress' : validateDomain(query) ? 'domain' : ''
}

async function getIPLocation(query) {
    if (!validateDomain(query) && !validateIPAddress(query)) {
        throw new Error('No valid IP address or domain name given')
    }
    const queryString = createQueryString(query)
    const ipData = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=${ipGeoKey}&${queryString}=${query}`)
    return await ipData.json()
}

export {
    getIPLocation
}