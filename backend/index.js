const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const https = require('https')
const fs = require('fs')
const path = require('path')
const cookieParser = require('cookie-parser')
const connectdb = require('./database/db.js')
const authRoute = require('./routers/auth.js')
const userRoute = require('./routers/user.js')
const doctorRoute = require('./routers/doctor.js')
const reviewRoute = require('./routers/review.js')

const app = express()

const corsOptions = {
    origin: true
}

app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())

app.use('/api/v1/auth', authRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/doctors', doctorRoute)
app.use('/api/v1/reviews', reviewRoute)

app.get('/', (req, res) => {
    res.send("Api is working")
})

dotenv.config()

const port = process.env.SERVER_PORT

const credentials = {
    key: fs.readFileSync(path.join(__dirname, './certs/key.pem'), 'utf-8'),
    cert: fs.readFileSync(path.join(__dirname, './certs/cert.pem'), 'utf-8')
}

const server = https.createServer(credentials, app)

server.listen(port, () => {
    connectdb()
    console.log(`Server is running on port ${port}`)
})