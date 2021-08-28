import express from 'express'
const route = express.Router();
import { taskList } from '../assets/ticket.js'
import {inserTicket, getTask, getAtask, deleteTasks, updateTodo} from '../modules/TaskList.Model.js';

route.all('/', (req, res, next)=>{
    console.log('We got it')
    next()

    // res.json({message: 'got hit'})
})

//return all the ticket

   
        route.get("/:id", async (req, res)=> {
            try {
            const {id} = req.params
            console.log(id)
            if (id) {
                const result = await getATask(id)
                red.json(result)
            } else {
                const tasklists = await getTasks()
                res.json({ result: tasklists})
            }
    } catch (error) {
        console.log(error)
        res.json(
            {message: 'Contact administration'})
    }
})
    




//add new ticket
route.post("/", async (req, res)=> {
    try { const result = await inserTicket(req.body)
        console.log(req.body)
        res.json({message: 'result'})
    } catch (error) {

    }
})
   


//update ticket
route.patch("/", async (req, res)=> {
    console.log (req.body,'----')

    if(!req.body.id) {
        return res.json({ status: 'error', message: 'invalid id request'})
    }
    const result = await updateTodo(req.body)
    res.json({message: 'you are requesting to update all the tickets'})

})

//delete ticket
route.delete("/", async (req, res)=> {
    const {id} = req.body
    if(!id){
        res.json({ status: 'error', message: 'invalid id request'})
    }
    const result = await deleteTask(id)
    console.log(result)
    res.json({message: 'you are deleting all the tickets from database'})


})

export default route


