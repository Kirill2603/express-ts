import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/user', async (req: Request, res: Response) => {
  try {
    res.send('user')
    // res.send(await User.find({}))
  } catch (e: any) {
    res.statusCode = 500
    res.send(e.message)
  }
})

router.get('/user/:id', async (req: Request, res: Response) => {
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