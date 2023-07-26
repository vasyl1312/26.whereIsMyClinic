import cors from 'cors'
import express from 'express'
import clinicsRouter from './routes/clinics' // Import the router, not the function
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5001

app.use('/clinics', clinicsRouter()) // Call the function to get the router

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
