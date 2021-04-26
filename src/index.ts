import app from "./app"
import  './config/database';


const main = async () => {
    const PORT: Number = Number(process.env.PORT) || 3000
    app.listen(PORT)
    console.log(`Server on port ${PORT}`)
}

main()