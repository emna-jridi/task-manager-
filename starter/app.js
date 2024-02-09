

const express = require('express');
const app = express();

const tasks= require('./routes/tasks')
const connectDB =  require('./db/connect')
require('dotenv').config()

//middleware

app.use(express.json())
app.use(express.static('./public'))

//routes 
app.use('/api/v1/tasks', tasks)

const port = 3000
const start = async()=>{
    try{

        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is lestening on port ${port}`))

    }catch (error){
        console.log(error)
    }
}
start()



//get all tasks 
// create a new task 
// get single task 
//update task patch?? 
//delete task 