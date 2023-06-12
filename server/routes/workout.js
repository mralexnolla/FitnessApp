import express from 'express' // or const express = require('express')
import { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateworkout } from '../controllers/workoutController.js' // 
const router = express.Router()


//Get all workouts 
router.get('/', getWorkouts)

//GET a single workout
router.get("/:id", getWorkout);

//POST a new workout
router.post("/", createWorkout);

//DELET a workout
router.delete("/:id", deleteWorkout);

//UPDATE a workout
router.patch("/:id", updateworkout);

export {router as workoutRoutes}  // or module.export = router;