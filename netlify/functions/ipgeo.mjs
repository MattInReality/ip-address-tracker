import fetch from 'node-fetch'
import querystring from 'querystring'
import {validateDomain, validateIPAddress} from "../../lib/validators.js";

function createQueryKey(query) {
    return validateIPAddress(query) ? 'ipAddress' : validateDomain(query) ? 'domain' : ''
}

function validatedQueryString(query) {
    const key = createQueryKey(query)
    if (key) {
        return querystring.stringify({
            ip: query
        })
    }
    return ''
}

function ipGeoLocationUrl(query, key) {
    const qs = validatedQueryString(query)
    return `https://api.ipgeolocation.io/ipgeo?apiKey=${key}${qs ? `&${qs}` : ''}`
}

exports.handler = async (event) => {
    try {
        const {search} = await JSON.parse(event?.body) ?? event.headers['client-ip']
        const res = await fetch(ipGeoLocationUrl(search, process.env.FM_002_IPGEOLOCATION_KEY))
        const data = await res.json()
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        }
    } catch (e) {

        console.log('ERROR', e)
        return {
            statusCode: 400,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({message: "Something went wrong"})
        }
    }
}