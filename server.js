import bodyParser from 'body-parser'
import express from 'express'
import "./models/index.js"
import { addUser, deleteUser, getUser, getUsers, postUser, updateUser } from './controllers/userController.js'

const app = express()



app.use(bodyParser.json())

app.get("/",(req,res)=>{

    res.send("this is from backend")
})

app.get("/add", addUser);
app.get("/users",getUsers)
app.get("/user/:id",getUser)

app.post("/user",postUser)
app.delete("/user/:id",deleteUser)
app.put("/user/:id",updateUser)



app.listen(3000,()=>{

    console.log("server connected successfully")
})