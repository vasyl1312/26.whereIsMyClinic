import * as dotenv from 'dotenv'
import csv from 'csv-parser'
import { createReadStream } from 'fs'
dotenv.config()

async function readClinicsFromFile(): Promise<any[]> {
  const results: any[] = []

  return new Promise((resolve, reject) => {
    createReadStream('clinic_files/clinics.csv')
      .pipe(csv())
      .on('data', async (data) => {
        results.push(data)
      })
      .on('end', () => {
        resolve(results)
      })
      .on('error', (error) => {
        reject(error)
      })
  })
}
export { readClinicsFromFile }
