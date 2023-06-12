import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    workouts: []
}

export const  workoutsSlice = createSlice({
    name: 'workouts',
    initialState,
    reducers:{
        setWorkouts : (state, action) => {
          state.workouts = action.payload
        },
        createWorkout: (state, action) => {
            state.workouts = [...state.workouts, action.payload]
        },
        deleteWorkout: (state, action) => {
            const workoutId = action.payload._id
            state.workouts = state.workouts.filter((workout) => workout._id !== workoutId)
        }
    }
})

export const { setWorkouts, createWorkout, deleteWorkout } = workoutsSlice.actions;
export const workoutsReducer =  workoutsSlice.reducer