import * as mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 100, validate: []},
  email: { type: String, required: true, minLength: 5, maxLength: 100},
  todolists: [{type: mongoose.Schema.Types.ObjectId}]
}, { collection: 'users' })

export const user = mongoose.model('user', UserSchema)