/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { deleteWorkout, workoutsReducer } from "../slice/workoutSlice";
import { useDispatch } from "react-redux";

//data fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    const response = await fetch(
      "http://localhost:4000/api/workoutes/" + workout._id,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();
    console.log(typeof workout.createdAt);

    if (response.ok) {
      dispatch(deleteWorkout(data));
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>
        {workout.createdAt &&
          formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>

      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default WorkoutDetails;
