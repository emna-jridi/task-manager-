const express = require('express');
const app = express();

const tasks= require('./routes/tasks')

//middleware

app.use(express.json())

app.use(express.static('./public'))

//routes 
app.get('/hello', (req,res)=>{
    res.send('Task Manager App')
})
app.use('/api/v1/tasks', tasks)

const port = 3000
app.listen(port, console.log(`server is lestening on port ${port}`))



//get all tasks 
// create a new task 
// get single task 
//update task patch?? 
//delete task 