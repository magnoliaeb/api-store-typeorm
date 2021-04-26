import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import categoryRouter from './routes/category.router'
import productRouter from './routes/product.router'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors({
    origin: '*'
}))


app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my api '})
})

app.use('/api', categoryRouter)
app.use('/api', productRouter)

export default app