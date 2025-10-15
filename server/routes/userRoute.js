import { Router } from "express";
import { User, Event, Booking } from "../models/index.js";
import { v4 as uuidv4 } from 'uuid'




const router = Router()



router.get('/', async (req, res)=>{
    try {
        const data = await User.findAll()
        res.status(200).json(data)
    } catch (e) {
        console.log(e)
    }
})



router.post('/reg', async (req, res)=>{
    try {
        const { username } = req.body
        const userisExist = await User.findOne({where:{username}})

        if(userisExist){
            return res.status(409).json({message:"Пользователь с таким именем уже есть!"})
        }

        const user = await User.create({
            uid: uuidv4(),
            username
        })


        return res.status(200).json({message: "Аккаунт успешно создан!"})

    } catch (e) {
        console.log(e)
    }
})







export default router