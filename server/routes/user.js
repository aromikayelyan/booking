import { Router } from "express";
import { User, Event, Booking } from "../models/index.js";




const router = Router()



router.get('/', async (req, res)=>{
    try {
        const data = await Booking.findAll()
        res.status(200).json(data)
    } catch (e) {
        console.log(e)
    }
})



router.post('/reg', async (req, res)=>{
    try {
        const user = await User.findOne({where:{}})
        
    } catch (e) {
        console.log(e)
    }
})







export default router