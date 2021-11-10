import fetch from 'node-fetch'
import querystring from 'querystring'
import {validateDomain, validateIPAddress} from "../../lib/validators.js";

const devOrigin = process.env.DEV_ORIGIN
const prodOrigin = process.env.PROD_ORIGIN

function createQueryKey(query) {
    return validateIPAddress(query) ? 'ipAddress' : validateDomain(query) ? 'domain' : ''
}

function validatedQueryString(query) {
    return querystring.stringify({
        ip: query
    })
}

function ipGeoLocationUrl(query, key) {
    const qs = validatedQueryString(query)
    return `https://api.ipgeolocation.io/ipgeo?apiKey=${key}${qs ? `&${qs}` : ''}`
}

exports.handler = async (event) => {
    try {
        if (![prodOrigin, devOrigin].includes(event.headers['origin'])) {
            return {
                statusCode: 403,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({message: 'Access denied'})
            }
        }

        const fallbackHeader = process.env.NODE_ENV === 'production' ? 'x-nf-client-connection-ip' : 'client-ip';
        const origin = event.headers['origin'] === devOrigin ? devOrigin : prodOrigin;

        const search = await JSON.parse(event.body).search || event.headers[fallbackHeader]
        const res = await fetch(ipGeoLocationUrl(search, process.env.FM_002_IPGEOLOCATION_KEY))
        const data = await res.json()

        if (res.status !== 200) {
            return {
                statusCode: 400,
                headers: {
                    'Access-Control-Allow-Origin': origin,
                    'Vary': 'Origin'
                },
                body: JSON.stringify({message: data.message})
            }
        }


        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': origin,
                'Vary': 'Origin'
            },
            body: JSON.stringify(data)
        }
    } catch (e) {
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': origin
            },
            body: JSON.stringify({message: "Something went wrong"})
        }
    }
}