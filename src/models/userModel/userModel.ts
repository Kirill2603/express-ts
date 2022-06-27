import * as mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  todolists: [{type: mongoose.Schema.Types.ObjectId}]
}, { collection: 'users' })

export const user = mongoose.model('user', UserSchema)