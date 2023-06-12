import {mongoose, Schema} from 'mongoose'  // const mongoose = require('mongoose)

const workoutSchema = new Schema({
    title:{
        type:String,
        required: true,
        trim: true
    },
    reps: {
        type: Number,
        required: true
    },
    load:{
        type: Number,
        required: true
    }
}, {timestamps: true})

export const Workout  = mongoose.model('Workout', workoutSchema)

//module.exports = mongoose.model('Workout',workoutSchema )