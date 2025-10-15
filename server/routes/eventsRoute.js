import { Router } from "express";
import { User, Event, Booking } from "../models/index.js";
import { v4 as uuidv4 } from 'uuid'




const router = Router()



router.get('/', async (req, res)=>{
    try {
        const data = await Event.findAll()
        res.status(200).json(data)
    } catch (e) {
        console.log(e)
    }
})



router.post('/create', async (req, res)=>{
    try {
        const { name, total_seats } = req.body
        const eventIsExist = await Event.findOne({where:{name}})

        if(eventIsExist){
            return res.status(409).json({message:"Событие с таким именем уже есть!"})
        }

        const event = await Event.create({
            name, 
            total_seats
        })


        return res.status(200).json(event, {message: "Успешно добавлено!"})

    } catch (e) {
        console.log(e)
    }
})







export default router