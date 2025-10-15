import { Router } from "express";
import { User, Event, Booking } from "../models/index.js";
import booking from "../models/booking.js";
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


router.post('/reserve', async (req, res)=>{
    try {
        const { event_id, user_id } = req.body


        const event = await Event.findOne({where:{id: event_id}})
        const user = await User.findOne({where:{id: user_id}})


        if(!event){
            return res.status(404).json({message: "Упс!!, Такого события нет в списке!!"})
        }

        if(!user){
            return res.status(404).json({message: "Упс!!, Такого пользователя нет в списке!!"})
        }


        const HisAlreadyHave = await Booking.findOne({where:{event_id, user_id: user.uid}})

        if(HisAlreadyHave){
            return res.status(404).json({message: "Вы уже записаны на это меропреятие, двойноебронирование запрещено!!"})
        }

        const reserve = await Booking.create({
            event_id,
            user_id: user.uid
        })


        // console.log(event, user)


        return res.status(200).json({mesage: "Регистрация на мероприятие прошла успешно!"})

    } catch (e) {
        console.log(e)
    }
})





export default router