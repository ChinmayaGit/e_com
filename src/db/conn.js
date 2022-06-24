const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/students-api", {
//     // useCreateIndex: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log("connection successful");
// }).catch((err) => {
//     console.log(err);
// });
mongoose.connect("mongodb+srv://chinu_01:chinu123@cluster0.gch4j.mongodb.net/?retryWrites=true&w=majority", {
    // useCreateIndex: false,
    // useNewUrlParser: true,
    // useUnifiedTopology: true
      useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true 
}).then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
});