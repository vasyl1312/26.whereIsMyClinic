import connect from '../db/dbConnect'
import { clinicsSchema } from '../db/schema/clinics'
import * as dotenv from 'dotenv'
dotenv.config()

async function createTableAndInsertClinic(clinicsInfo: any[]) {
  try {
    const dbs = await connect()

    for (const clinicData of clinicsInfo) {
      const dataToInsert: any = {}
      Object.entries(clinicData).forEach(([key, value]) => {
        dataToInsert[key] = value === '' ? '-' : value
      })

      await dbs.insert(clinicsSchema).values(dataToInsert).execute()
    }
  } catch (error) {
    console.error('Error creating table and inserting clinicsInfo:', error)
    throw new Error('Error creating table and inserting clinicsInfo')
  } finally {
    process.exit(0)
  }
}

export { createTableAndInsertClinic }
