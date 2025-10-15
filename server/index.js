import express from "express";
import bookingRoute from './routes/bookingRoute.js'
import userRoute from './routes/userRoute.js'
import eventRoute from './routes/eventsRoute.js'
import { syncDb } from "./models/index.js";


const app = express()
const PORT = process.env.PORT || 3600


app.use(express.json())
app.use('/booking', bookingRoute)
app.use('/user', userRoute)
app.use('/events', eventRoute)


// syncDb()

const start = () => {
    try {
        app.listen(PORT, ()=>{
            console.log(`server run on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}



start()