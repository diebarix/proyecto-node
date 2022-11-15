import userRouter from '#Routes/user.routes.js'
import express from 'express'

const expressApp = express()

// TODO añadir middleware, routes, etc..
expressApp.use(express.json())

// routes
expressApp.use("/user", userRouter)

export default expressApp