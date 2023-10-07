const express = require('express')
const { updateUser, deleteUser, getSingleUser, getAllUsers } = require('../controllers/userController.js')
const { authenticate, restrict } = require('../auth/verifyToken.js')

const router = express.Router()

router.get('/:id', authenticate, restrict(['patient']), getSingleUser)

router.get('/', authenticate, restrict(['admin']), getAllUsers)

router.put('/:id', authenticate, restrict(['patient']), updateUser)

router.delete('/:id', authenticate, restrict(['patient']), deleteUser)

module.exports = router