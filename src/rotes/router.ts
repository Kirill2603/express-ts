import express, { Request, Response } from 'express'
import { user } from '../models/userModel'
import { todolist } from '../models/todolistModel'

const router = express.Router({ mergeParams: true })

router.get('/users/:id', async (req, res) => {
  try {
    if (req.params.id) {
      res.send(await user.findById({ _id: req.params.id }))
    } else {
      res.send(await user.find({}))
    }
  } catch (e: any) {
    res.statusCode = 500
    res.send(e.message)
  }
})

router.post('/users', async (req, res) => {
  try {
    const newUser = await user.create(req.body)
    res.send(newUser)
  } catch (e: any) {
    res.statusCode = 500
    res.send(e.message)
  }
})

router.delete('/users/:id', async (req, res) => {
  try {
    res.send(await user.findByIdAndDelete({ _id: req.params.id }, (err: any) => {
      if (err) {
        res.statusCode = 500
        res.send('User not found')
      }
    }))
  } catch (e: any) {
    res.statusCode = 500
    res.send(e.message)
  }
})

router.put('/users/:id', async (req, res) => {
  user.findByIdAndUpdate(
    req.params.id,
    { '$set': req.body },
    {
      new: true,
      runValidators: true,
      strictQuery: true,
    },
    (err: any, user: any) => {
      if (err) {
        res.send(err.message)
      }
      res.send(user)
    })
})

router.get('/users/:id/todolists', async (req, res) => {
  try {
    res.send(await todolist.find({ user_id: req.params.id }))
  } catch (e: any) {
    res.statusCode = 500
    res.send(e.message)
  }
})

router.post('/users/:id/todolists', async (req, res) => {
  try {
    res.send(await todolist.create({ user_id: req.params.id, ...req.body }))
  } catch (e: any) {
    res.statusCode = 500
    res.send(e.message)
  }
})

router.delete('/users/:id/todolists/:todolistId', async (req, res) => {
  try {
    res.send(await todolist.findByIdAndDelete(req.params.todolistId))
  } catch (e: any) {
    res.statusCode = 500
    res.send(e.message)
  }
})

router.put('/users/:id/todolists/:todolistId', async (req, res) => {
  todolist.findByIdAndUpdate(
    req.params.todolistId,
    { '$set': req.body },
    {
      new: true,
      runValidators: true,
      strictQuery: true,
    },
    (err: any, todolist: any) => {
      if (err) {
        res.send(err.message)
      }
      res.send(todolist)
    })
})

export default router