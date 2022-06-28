import express, { Request, Response } from 'express'
import { user } from '../models/userModel/userModel'

const usersRouter = express.Router({mergeParams: true})

usersRouter.get('/users', async (req, res) => {
  try {
    if (req.query.id) {
      res.send(await user.findById({_id: req.query.id}))
    } else {
      res.send(await user.find({}))
    }
  } catch (e: any) {
    res.statusCode = 500
    res.send(e.message)
  }
})

usersRouter.post('/users', async (req, res) => {
  try {
    const newUser = await user.create(req.body)
    res.send(newUser)
  } catch (e: any) {
    res.statusCode = 500
    res.send(e.message)
  }
})

usersRouter.delete('/users', async (req, res) => {
  try {
    res.send(await user.findByIdAndDelete({_id: req.query.id}, (err: any, ) => {
        if (err){
          res.statusCode = 500
          res.send('User not found')
        }
    }))

  } catch (e: any) {
    console.log(e)
    res.statusCode = 500
    res.send(e.message)
  }
})

export default usersRouter