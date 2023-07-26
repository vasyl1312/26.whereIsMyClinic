import { sql } from 'drizzle-orm'
import { connect } from '../db/dbConnect'
import { clinicsSchema } from '../db/schema/clinics'
import { geocodeAddress } from '../helper/geocode'

async function searchFromDB(searchValue: string, column: string) {
  try {
    const searchTerm = `%${searchValue}%`
    const db = await connect()
    const selected = await db
      .select()
      .from(clinicsSchema)
      .where(sql`${clinicsSchema[column as keyof typeof clinicsSchema]} ILIKE ${searchTerm}`)

    const formattedResult: { [key: string]: any }[] = await Promise.all(
      selected.map(async (item: any) => {
        const formattedItem: { [key: string]: any } = {}
        for (const key in item) {
          if (Object.prototype.hasOwnProperty.call(item, key)) {
            const formattedKey = key.toLowerCase().replace(/ /g, '_')
            formattedItem[formattedKey] = item[key]
          }
        }

        const geocodeResult = await geocodeAddress(formattedItem['full_address'])
        formattedItem['latitude'] = geocodeResult.latitude
        formattedItem['longitude'] = geocodeResult.longitude

        return formattedItem
      })
    )

    return formattedResult
  } catch (error) {
    console.error('Error:', error)
    throw new Error('Error while searching in the database')
  }
}

export { searchFromDB }
