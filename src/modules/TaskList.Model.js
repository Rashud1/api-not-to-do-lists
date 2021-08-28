import TicketListSchema from './TaskLists.schema.js'

const newTask = {
    task: "Watching TV",
    hr: 5,
}
export const inserTicket = (newTask) => {
    return new Promise((resolve, reject)=>{
        TicketListSchema(newTask)
        .save()
        .then((data)=>{
        resolve(data)
        })

        .catch((error)=>{
        reject(error)
        })
    })
      
}





//read adata from database
export const getTask = () => {
    return new Promise((resolve, reject)=>{
        TicketListSchema.find()
        .then(data => {
            resolve(data)
        })
        .catch((data) => {
            error=> reject(data)
        })
    })


}


// get single ticket 
export const getAtask = (_id) =>{
    // TicketListSchema.findById(_id)
    // TicketListSchema.find({_id: _id})

    return new promise((resolve, reject)=>{
        TicketListSchema.findById

    })
    
    
    

}


//delete single document
export const deleteTask = _id => {
    return new Promise ((resolve, reject)=> {
        TicketListSchema.findByIdAndDelete(_id)
        .then(data => resolve(data))
        .catch((error) => reject(error))
    }
    )
}

export const updateTodo = ({ id, todo}) => {
    return new Promise((resolve, reject) => {
        TicketListSchema.findByIdAndUpdate(id, {
            todo,
        })
        .then((result) => resolve(result))
        .catch((error) => reject(error))
    })
}

//   delete on eor more data
      
export const deleteTasks = ids => {
    return new Promise ((resolve, reject)=> {
        TicketListSchema.deleteMany({
            _id:{
                $in: ids
            },
        })
        .then(data => resolve(data))
        .catch((error) => reject(error))
    })
    

    

}
// mark as to do

//mark as not to do