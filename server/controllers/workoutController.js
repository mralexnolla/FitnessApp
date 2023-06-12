import { Workout } from "../models/WorkoutModel.js"; // or const workout = require('../models/Workout')
import mongoose from "mongoose";

// function get all workouts
const getWorkouts = async (req, res) => {
    const workouts  = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json({message:"All data retrieved successfully in ascending number", workouts})
}

//function to get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout"})
    }

    const workout = await Workout.findById(id)
    if(!workout){
        return res.status(404).json({message:"This workout does not exit", error: error.message})
    }
    res.status(400).json({message:"workout found", workout})
}

//function to create new workout
const createWorkout = async (req, res) =>{
    const {title, load, reps} = req.body

    // check if any field is empty 
    let emptyFields = []

    if(!title){
        emptyFields.push('title')
    }
    if(!load){
        emptyFields.push("load");
    }
    if(!reps){
        emptyFields.push("reps");
    }
    if (emptyFields.length > 0){
        return res.status(400).json({message:`Field ${emptyFields} cannot be empty`, error: 'Please fill in all the fields', emptyFields})
    }

      //add to db
      try {
        const workout = await Workout.create({ title, load, reps });
        res.status(200).json({ message: "Data successfully added", workout });
      } catch (error) {
        res
          .status(400)
          .json({ message: "Faile to create workout", error: error.message });
      }
}

//function to delete a workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})
    if(!workout){
        return res.status(400).json({message:'No Such workout' })
    }

    res.status(200).json(workout)
}

//function to update workout
const updateworkout = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such workout'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if(!workout){
        return res.status(400).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}


//exports 

export { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateworkout  }; 
//module.exports = {createWorkout}