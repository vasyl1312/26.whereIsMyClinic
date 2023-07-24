import express from 'express'
import { Client } from 'pg'
// import { initClinicsData } from './dataLoader'
import { clinicsRouter } from './routes/clinics'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const port = process.env.PORT || 5001
const connectionString = process.env.DATABASE_URL
const client = new Client({ connectionString })
// initClinicsData()

app.use('/clinics', clinicsRouter)

// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`)
// })

client
  .connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`)
    })
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error)
  })
