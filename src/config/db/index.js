const mongoose = require("mongoose")



async function connect(){
    try{
        await mongoose.connect('mongodb+srv://vercel-admin-user:sang022337@cluster0.xosimho.mongodb.net/blog',{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('Connect Successfully')
    } catch (error){
        console.log('Connection Failed')

    }
}

module.exports = {connect};
