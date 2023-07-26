import express from 'express'
import { searchFromDB } from '../utils/searchFromDB'
const router = express.Router()

type ColumnValue =
  | 'City'
  | 'State'
  | 'Long Name Version'
  | 'Typeform registration link'
  | 'PMS'
  | 'Meta-title'
  | 'Meta-description'
  | 'slug'
  | 'Website'
  | 'Clinic Name'
  | 'Display_on_web'
  | 'link to clinic suburb page'
  | 'Full Address'
  | 'Suburb'
  | 'Postcode'
  | 'Email'
  | 'Phone'
  | 'nearby1_txt'
  | 'nearby1_link'
  | 'nearby2_txt'
  | 'nearby2_link'
  | 'nearby3_txt'
  | 'nearby3_link'
  | 'nearby4_txt'
  | 'nearby4_link'
  | 'About Clinic'

const clinicsRouter = () => {
  router.get('/', async (req, res) => {
    try {
      const { searchValue, column } = req.query

      if (
        typeof column !== 'string' ||
        typeof searchValue !== 'string' ||
        !isValidColumnValue(column)
      ) {
        throw new Error(`Invalid column value. Expected 'City' or 'State', received '${column}'`)
      }

      const result = await searchFromDB(searchValue, column as ColumnValue)
      res.json(result)
    } catch (error) {
      console.error('Error:', error)
      res.status(500).send('Internal Server Error')
    }
  })

  return router
}

function isValidColumnValue(value: string): value is ColumnValue {
  return (
    value === 'City' ||
    value === 'State' ||
    value === 'Long Name Version' ||
    value === 'Typeform registration link' ||
    value === 'PMS' ||
    value === 'Meta-title' ||
    value === 'Meta-description' ||
    value === 'slug' ||
    value === 'Website' ||
    value === 'Clinic Name' ||
    value === 'Display_on_web' ||
    value === 'link to clinic suburb page' ||
    value === 'Full Address' ||
    value === 'Suburb' ||
    value === 'Postcode' ||
    value === 'Email' ||
    value === 'Phone' ||
    value === 'nearby1_txt' ||
    value === 'nearby1_link' ||
    value === 'nearby2_txt' ||
    value === 'nearby2_link' ||
    value === 'nearby3_txt' ||
    value === 'nearby3_link' ||
    value === 'nearby4_txt' ||
    value === 'nearby4_link' ||
    value === 'About Clinic'
  )
}

export default clinicsRouter
