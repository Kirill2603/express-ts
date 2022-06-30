import express, { Express, Request, Response } from 'express'
import mongoose from 'mongoose'
import router from './rotes/router'

const app: Express = express()
const port = 3000
const DB_URL = 'mongodb+srv://kirill:kirill@cluster0.uhtjuss.mongodb.net/todolistDB?retryWrites=true&w=majority'

// app.get('*', (req, res) => {
//   res.statusCode = 404
//   res.send('what???')
// });
// app.use(express.urlencoded)
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api', router)

app.listen(port, async () => {
  try {
    await mongoose.connect(DB_URL)
    mongoose.set('runValidators', true)
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
  } catch (e) {
    console.log(e)
  }
})