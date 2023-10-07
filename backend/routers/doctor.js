const express = require('express')
const { updateDoctor, deleteDoctor, getSingleDoctor, getAllDoctors } = require('../controllers/doctorController.js')
const { authenticate, restrict } = require('../auth/verifyToken.js')
const reviewRouter = require('./review.js')

const router = express.Router()

//nested route
router.use('/:doctorId/reviews', reviewRouter)

router.get('/:id', getSingleDoctor)

router.get('/', getAllDoctors)

router.get('/:id', authenticate, restrict(['doctor']), updateDoctor)

router.delete('/:id', authenticate, restrict(['doctor']), deleteDoctor)

module.exports = router