const express=require("express")
const morgan=require("morgan")
const dotenv=require('dotenv')
const colors=require("colors")
const cors=require('cors')
const connectDB = require("./config/db")


dotenv.config()

//db connection
connectDB()


const app=express()
//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/api/v1/user',require('./routes/userRoute'))
app.use('/api/v1/todo',require('./routes/todoRoute'))
app.use('/api/v1/test',require('./routes/testRouter'))

const PORT=process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`node server is running on ${process.env.DEV_MODE} mode on port number ${PORT}`.bgMagenta)
})