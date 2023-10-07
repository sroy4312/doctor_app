const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const connectdb = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database connected successfully')
    } catch (err) {
        throw err.message
    }
}

module.exports = connectdb