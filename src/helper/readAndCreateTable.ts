import dotenv from 'dotenv'
import { readClinicsFromFile } from './readFile'
import { createTableAndInsertClinic } from './createTableAndInsertClinic'
dotenv.config()

const createAndRead = async () => {
  //clinics
  const clinicsInfo = await readClinicsFromFile()
  const clinicsProduct = await createTableAndInsertClinic(clinicsInfo)
}

export { createAndRead }
