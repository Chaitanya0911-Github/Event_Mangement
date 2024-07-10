import mongoose from 'mongoose';
import validator from 'validator';

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name required"],
        minLength: [3, "Name must contain atleast 3 letters"]
    },
    email: {
        type: String,
        required: [true, "Email required"],
        validate: [validator.isEmail, "Please provide valid email"]
    },
    subject: {
        type: String,
        required: [true, "Subject required"],
        minLength: [5, "Subject must contain atleast 3 letters"]
    },
    message: {
        type: String,
        required: [true, "Message required"],
        minLength: [10, "Message must contain atleast 10 letters"]
    }
})


// export const Message = new mongoose.model("Message", messageSchema);
export const Message = mongoose.model('Message', messageSchema, 'messages');