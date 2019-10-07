import mongoose from 'mongoose'


const userSchema = new schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    userName: { type: String, required: true },
})

export const userModel = mongoose.model('userModel', userSchema)
