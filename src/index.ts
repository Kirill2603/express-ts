import express, { Express, Request, Response } from 'express'
import router from './rotes/router'

const app: Express = express()
const port = 3000

// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server')
// })
// app.get('/user', (req: Request, res: Response) => {
//   res.send('asdasdasdasd')
// })

app.use('/api', router)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})