import { Router } from "express";
import { User, Event, Booking } from "../models/index.js";
// import user from "../models/user.js";
// import booking from "../models/booking.js";
// import event from "../models/event.js";



const router = Router()



router.get('/', async (req, res)=>{
    try {
        const data = await Booking.findAll()
        res.status(200).json(data)
    } catch (e) {
        console.log(e)
    }
})







export default router