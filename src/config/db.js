import mongoose from 'mongoose';

const mongoClient = async () => {
    try{
        // creating new connection 
        console.log('connecting to mongodb ')
const uri = "mongodb://localhost:/task_list"
const con = await mongoose.connect(uri, {})
if (con) {
    console.log('mongo is connected')
}



     } catch (error) {
            console.log(error)
        }
    }


export default mongoClient

// async/await