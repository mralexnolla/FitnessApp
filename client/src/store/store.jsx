import {configureStore} from "@reduxjs/toolkit"
import {workoutsReducer} from '../slice/workoutSlice'

export const store = configureStore({
  reducer: {
    workouts: workoutsReducer,
  },
});