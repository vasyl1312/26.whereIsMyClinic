import { ApiKeyManager } from '@esri/arcgis-rest-request'
import { geocode } from '@esri/arcgis-rest-geocoding'
import dotenv from 'dotenv'
dotenv.config()

const apiKey = `${process.env.MAPS_API_KEY}`

async function geocodeAddress(address: string) {
  try {
    const authentication = ApiKeyManager.fromKey(apiKey)
    const response = await geocode({
      address: address,
      authentication,
    })

    if (response.candidates && response.candidates.length > 0) {
      const location = response.candidates[0].location
      return { latitude: location.y, longitude: location.x }
    } else {
      console.log('No results found for the given address.')
      return { latitude: null, longitude: null }
    }
  } catch (error) {
    console.error('Error while geocoding address:', error)
    return { latitude: null, longitude: null }
  }
}

export { geocodeAddress }
