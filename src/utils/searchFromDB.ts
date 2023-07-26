import connect from '../db/dbConnect'
import { clinicsSchema } from '../db/schema/clinics'
import { sql } from 'drizzle-orm'
async function searchFromDB(searchValue: string, column: string) {
  try {
    const searchTerm = `%${searchValue}%`;
    const db = await connect()
    const selected = await db
      .select()
      .from(clinicsSchema)
      .where(sql`${clinicsSchema[column as keyof typeof clinicsSchema]} ILIKE ${searchTerm}`)

    return selected
  } catch (error) {
    console.error('Error:', error)
    throw new Error('Error while searching in the database')
  }
}

export { searchFromDB }
