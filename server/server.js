import express from "express"; // or const express = require('express')
import mongoose from "mongoose"; // or const mongoose = require('mongoose')
import colors from "colors";
import dotenv from 'dotenv';
import { workoutRoutes } from "./routes/workout.js"; // or const workout = require('./routes/workout')
import cors from "cors"

dotenv.config()

const app = express()

//middlewares
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Routes
app.use('/api/workoutes',workoutRoutes)

//connect to the database 
mongoose.connect(process.env.MONGO_URI)
  .then((res) => {
    if(res){
      console.log("Data base connected".bgWhite.red);

      // listen to for request
      app.listen(process.env.PORT, () => {
        console.log(
          `server is started on port ${process.env.PORT}`.bgWhite.green
        );
      });
    }
  })
  .catch((err) => {
    console.log("Not able to connect to the DB check credentials or Network", error)
  })

//connection to DB using async..await

// const conToDb = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI)
//     console.log("Database is running".bgGreen.white)
      
//       //listen for reques
//       app.listen(process.env.PORT,() => {
//       console.log("App is running".bgGreen.white)  
//       })

    
//   } catch (error) {
//     //console.log(error.bgRed.White)
//     console.log("DB not connected check connection string or network".bgRed.white)
//   }
// }

// conToDb()


