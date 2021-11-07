import fetch from 'node-fetch'
import {createQueryKey} from '../../lib/api-calls'
import querystring from 'querystring'

function validatedQueryString(query) {
    const key = createQueryKey(query)
    if (key) {
        return querystring.stringify({
            [key]: query
        })
    }
    return ''
}

function ipGeoLocationUrl(query, key) {
    const qs = validatedQueryString(query)
    return `https://geo.ipify.org/api/v2/country,city?apiKey=${key}${qs ? `&${qs}` : ''}`
}

exports.handler = async (event) => {
    try {
        const {search} = event.body || ""
        const res = await fetch(ipGeoLocationUrl(search, process.env.FM_002_IPGEO_KEY))
        const data = await res.json()
        return {
            statusCode: 200,
            body: data
        }
    } catch (e) {
        console.log('ERROR', e)
        return {
            statusCode: 400,
            body: JSON.stringify({message: "Something went wrong"})
        }
    }
}