import express from "express";


const app = express()
const PORT = process.env.PORT || 3600


app.use(express.json())

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