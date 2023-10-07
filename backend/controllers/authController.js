const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/UserSchema')
const Doctor = require('../models/DoctorSchema')

const generateToken = (user) => {
    return jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET_KEY, {
        expiresIn: '15d'
    })
}

const register = async(req, res) => {
    const { name, email, password, role, gender, photo } = req.body
    try {
        let user = null;
        if(role === 'patient'){
            user = await User.findOne({email})
        }
        else if(role === 'doctor') {
            user = await Doctor.findOne({email})
        }
        if(user) {
            return res.status(400).json({message: 'User already exists'})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        if(role === 'patient') {
            user = new User({
                name,
                email,
                password: hashedPassword,
                role,
                gender,
                photo
            })
        }
        if(role === 'doctor') {
            user = new Doctor({
                name,
                email,
                password: hashedPassword,
                role,
                gender,
                photo
            })
        }
        await user.save()
        res.status(200).json({success: true, message: 'Successfully registered'})
    } catch (err) {
        res.status(500).json({success:false, message: 'Internal server error. Try again later'})
    }
}

const login = async(req, res) => {
    const { email } = req.body
    try {
        let user = null;
        const patient = await User.findOne({email})
        const doctor = await Doctor.findOne({email})
        if(patient){
            user = patient
        }
        if(doctor) {
            user = doctor
        }
        if(!user) {
            return res.status(404).json({message: 'Email id or password is incorrect'})
        }
        const isPasswordMatched = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordMatched) {
            return res.status(400).json({success: false, message: 'Email id or password is incorrect'})
        }
        const token = generateToken(user)
        const { password, role, appointments, ...rest } = user._doc
        res.status(200).json({success: true, message: 'Successfully logged in', token, data: {...rest}})
    } catch (err) {
        res.status(500).json({success: false, message: 'Login failed'})
    }
}

module.exports = { register, login }