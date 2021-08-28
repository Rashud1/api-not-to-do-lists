import  mongoose  from 'mongoose'

const TicketListSchema = mongoose.Schema(
    {
        task:{
            type: String,
            require: true,
            required: ""
        },
        hr: {
            type: Number,
            require: true,
            default: 0,
        },

},
{
    timestamps: true,
}
)


const TaskList = mongoose.model( "", TicketListSchema)

export default TaskList