const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://kenil10:kenil10@cluster0.r3m1rcz.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Db connection sucessfull")
}).catch((err)=>{
    console.log("connection error", err)
})