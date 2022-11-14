import connectDB from "#Database/db.js"
import "#Config/env.js"
import httpServer from "#Database/http.js"
const app = async () => {
    await connectDB(process.env.MONGODB_URL)

    httpServer.listen(process.env.PORT, () => {
        console.log(`Servidor escuchando en el puerto ${process.env.PORT}`)
    })
}

app()