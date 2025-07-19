const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      match: [/^\d{10}$/, 'Phone number must be 10 digits'],
    },
    date: {
      type: Date,
      required: [true, 'Date is required'],
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
      trim: true,
    },
    donationType: {
      type: String,
      required: [true, 'Donation type is required'],
      enum: ['food', 'clothing', 'money', 'education', 'medical'],
    },
    amount: {
      type: Number,
      validate: {
        validator: function (value) {
          // Only validate amount if donationType is 'money'
          if (this.donationType === 'money') {
            return value > 0;
          }
          return true;
        },
        message: 'Amount must be a positive number when donationType is money',
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false, // optional: removes __v field
  }
);

module.exports = mongoose.model('Donation', donationSchema);
