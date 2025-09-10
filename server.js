import express from 'express'
import publicRoutes from './routes/public.js'
import privateRoutes from './routes/private.js'

const app = express()

app.use(express.json())

app.use('/', publicRoutes)
app.use('/', privateRoutes)

app.listen(3333, () => console.log("Servidor rodando!"))