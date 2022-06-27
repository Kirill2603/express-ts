import express, { Request, Response } from 'express'
import { user } from '../models/userModel/userModel'

const router = express.Router()

router.get('/users', async (req: Request, res: Response) => {
  try {
    res.send(await user.find({}))
  } catch (e: any) {
    res.statusCode = 500
    res.send(e.message)
  }
})

router.post('/users', async (req: Request, res: Response) => {
  try {
    console.log(req.body)
    const newUser = await user.create(req.body)
    res.send(newUser)
  } catch (e: any) {
    console.log(req.body)
    res.statusCode = 500
    res.send(e.message)
  }
})

router.get('/users/:id', async (req: Request, res: Response) => {
  try {
    res.send('user: id')
    // const User = await User.findOne({name: req.params.id})
    // res.send(User)
  } catch (e: any) {
    res.statusCode = 500
    res.send(e.message)
  }
})

export default router