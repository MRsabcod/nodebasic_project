import express from 'express'
import prodcuts from './products.mjs'
import ads from './ads.mjs'
const router =express.Router()

router.use('/products',prodcuts)
router.use('/ads', ads)
export default router