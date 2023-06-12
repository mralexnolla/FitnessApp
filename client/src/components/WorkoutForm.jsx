/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { createWorkout } from "../slice/workoutSlice";
import { useDispatch } from "react-redux";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [emptyFields, setEmptyFields] = useState([])
  

  const dispatch = useDispatch();

  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch("http://localhost:4000/api/workoutes", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
   

    if (!response.ok) {
      setErrorMsg(data.message);
      setEmptyFields(data.message)
    } else {
      setTitle("");
      setLoad("");
      setReps("");
      setErrorMsg(null);
      setEmptyFields([])
      console.log("new workout added", data);
      dispatch(createWorkout(data));
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Exercise Title</label>
      <input
        type="text"
        name=""
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Load (in kg)</label>
      <input
        type="number"
        name=""
        value={load}
        onChange={(e) => setLoad(e.target.value)}
        className={emptyFields.includes("load") ? "error" : ""}
      />

      <label>Reps</label>
      <input
        type="number"
        name=""
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        className={emptyFields.includes("reps") ? "error" : ""}
      />

      <button>Add Workout</button>
      {errorMsg && <div className="error">{errorMsg}</div>}
    </form>
  );
};

export default WorkoutForm;
