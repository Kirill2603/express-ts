import express, { Express, Request, Response } from 'express'
import mongoose from 'mongoose'
import router from './rotes/router'

const app: Express = express()
const port = 3000
const DB_URL = 'mongodb+srv://kirill:kirill@cluster0.c5o7vvn.mongodb.net/todolistDB?retryWrites=true&w=majority'

// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server')
// })
// app.get('/user', (req: Request, res: Response) => {
//   res.send('asdasdasdasd')
// })

app.use(express.json())
app.use('/api', router)

app.listen(port, async () => {
  try {
    await mongoose.connect(DB_URL)
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
  } catch (e) {
    console.log(e)
  }
})