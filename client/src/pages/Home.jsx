/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect /*useState*/ } from 'react'
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
import {setWorkouts, createWorkout} from '../slice/workoutSlice'
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  //const [workouts, setWorkouts] = useState(null)
  
  const workouts = useSelector((store) => store.workouts.workouts);

  const dispatch = useDispatch()

  const fetchworkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workoutes");
      const data = await response.json()
      
      if(response.ok){
          //setWorkouts(data.workouts)
          dispatch(setWorkouts(data.workouts));
      }
  }

  useEffect(() => {
    fetchworkouts();
  }, [workouts, dispatch]);

  return (
    <div className='home'>
      <div className="workouts">
      {
        workouts && workouts.map((workout,index) => {
          return (
            <WorkoutDetails key={index} workout={workout} />
          )
        })
      }
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home
