const Doctor = require('../models/DoctorSchema.js')

const updateDoctor = async(req, res) => {
    const id = req.params.id
    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(id, {
            $set: req.body
        }, {new: true}).select('-password')
        res.status(200).json({success: true, message: 'Successfully updated', data: updatedDoctor})
    } catch (err) {
        res.status(500).json({success: false, message: 'Failed to update'})
    }
}

const deleteDoctor = async(req, res) => {
    const id = req.params.id
    try {
        await Doctor.findByIdAndDelete(id)
        res.status(200).json({success: true, message: 'Successfully deleted'})
    } catch (err) {
        res.status(500).json({success: false, message: 'Failed to delete'})
    }
}

const getSingleDoctor = async(req, res) => {
    const id = req.params.id
    try {
        const doctor = await Doctor.findById(id).populate('reviews').select('-password')
        res.status(200).json({success: true, message: 'Doctor found', data: doctor})
    } catch (err) {
        res.status(500).json({success: false, message: 'No doctor found'})
    }
}

const getAllDoctors = async(req, res) => {
    try {
        const { query } = req.query // This parameter is used to filter data based on specific criteria
        let doctors;
        if(query) {
            doctors = await Doctor.find({isApproved: 'approved', $or: [
                {
                    name: {$regex: query, $options: 'i'}
                },
                {
                    specialization: {$regex: query, $options: 'i'}
                }
            ]}).select('-password')
        }else {
            doctors = await Doctor.find({isApproved: 'approved'}).select('-password')
        }
        res.status(200).json({success: true, message: 'Doctors found', data: doctors})
    } catch (err) {
        res.status(500).json({success: false, message: 'No doctors found'})
    }
}

module.exports = { updateDoctor, deleteDoctor, getSingleDoctor, getAllDoctors }