import "reflect-metadata"
import "express-async-errors"
import express from "express"
import handleAppErrorMiddeware from "./middlewares/handleAppError.middleware"
import ownerRoutes from "./routes/owner.routes"
import petsRoutes from "./routes/pets.routes"


const app = express()
app.use(express.json())

app.use('/owners', ownerRoutes)
app.use('/pets', petsRoutes)


app.use(handleAppErrorMiddeware)

export default app