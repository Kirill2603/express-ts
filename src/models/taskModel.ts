import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
  todolist_id: { type: mongoose.Types.ObjectId, required: true, ref: 'todolist' },
  task_title: { type: String, required: true, minLength: 3, maxLength: 100 },
  description: { type: String, required: false, maxLength: 100, default: '' },
  priority: { type: String, enum: ['low', 'middle', 'high'], default: 'low' },
  is_done: { type: Boolean, default: false },
}, { collection: 'task' })

export const task = mongoose.model('task', TaskSchema)