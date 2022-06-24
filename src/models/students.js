const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 3,
    },
    email: {
        type: String,
        require: true,
        minlength: 5,
        unique: [true, "Email already exist."],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invilid Email");
            }
        }
    },
    phone: {
        type: Number,
        require: true,
        minlength: 10,
    },
    address: {
        type: String,
        require: true,
    
    },
    // date: {
    //     type: Date,
    //     default: Date.now
    // }

})

const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;


