const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//session models will be like the graph nodes per game and the stats and game history?


const sessionSchema=new Schema({
    cookieId:{ type: String, required:true, unique: true },
    createdAt:{ type: Date, expiers: 3600000, default: Date.now }
});

module.exports=mongoose.model('Session',sessionschema)