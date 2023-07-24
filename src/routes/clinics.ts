import express, { Request, Response } from 'express'
// import { Clinic } from '../dataLoader' // Виправлено імпорт

export const clinicsRouter = express.Router()

// clinicsRouter.get('/', async (req: Request, res: Response) => {
//   try {
//     const clinics = await Clinic.find()
//     res.json({ clinics })
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch clinics' })
//   }
// })

// clinicsRouter.get('/city/:city', async (req: Request, res: Response) => {
//   try {
//     const clinics = await Clinic.find({ where: { city: req.params.city } })
//     res.json({ clinics })
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch clinics' })
//   }
// })

// clinicsRouter.get('/state/:state', async (req: Request, res: Response) => {
//   try {
//     const clinics = await Clinic.find({ where: { state: req.params.state } })
//     res.json({ clinics })
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch clinics' })
//   }
// })

// clinicsRouter.get('/postal-code/:postalCode', async (req: Request, res: Response) => {
//   try {
//     const clinics = await Clinic.find({ where: { postal_code: req.params.postalCode } })
//     res.json({ clinics })
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch clinics' })
//   }
// })
