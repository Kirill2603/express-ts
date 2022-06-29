import * as mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, min: 3, max: 100, validate: []},
  email: { type: String, required: true, min: 5, max: 100},
  todolists: [{type: mongoose.Schema.Types.ObjectId}]
}, { collection: 'users' })

export const user = mongoose.model('user', UserSchema)