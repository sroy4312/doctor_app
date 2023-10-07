const mongoose = require('mongoose');
const Doctor = require('./DoctorSchema.js');
const DoctorSchema = require('./DoctorSchema.js');

const reviewSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

reviewSchema.pre(/^find/, (next) => {
  this.populate({
    path: 'user',
    select: 'name photo',
  });
  next();
})

reviewSchema.statics.calcAverageratings = async function(doctorId) {
  //this refers to current review
  const stats = await this.aggregate([{
    $match: { doctor: doctorId}
  },{
    $group: {
      _id: '$doctor',
      numOfRatings: {$sum: 1},
      avgRating: {$avg: '$rating'}
    }
  }]);
  await Doctor.findByIdAndUpdate(doctorId, {
    totalRating: stats[0].numOfRatings,
    averageRating: stats[0].avgRating
  });
};

reviewSchema.post("save", function() {
  this.constructor.calcAverageratings(this.doctor)
})

module.exports = mongoose.model("Review", reviewSchema);