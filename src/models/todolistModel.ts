import mongoose from 'mongoose'

const TodolistSchema = new mongoose.Schema({
  user_id: {type: mongoose.Types.ObjectId, required: true, ref: 'user' },
  title: { type: String, required: true, minLength: 3, maxLength: 100},
  tasks: [{type: mongoose.Schema.Types.ObjectId, ref: 'task', default: []}]
}, { collection: 'todolists' })

export const todolist = mongoose.model('todolist', TodolistSchema)