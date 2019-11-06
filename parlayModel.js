//switching to MONGOOSE
const mongoose=require('mongoose');
const MONGO_URI='';
mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'parlay'
})
.then(() => console.log('Connected to Mongo DB'))
.catch(err=>console.log(err));

const Schema=mongoose.Schema;

//setting up a user Schema
const userSchema=new Schema({
    name:String,
    language: "Javascript",
    initialAmount: Number,
    currentAmount: Number,
    status: true,
    games: []
});


const User=mongoose.model('user',userSchema);



const parlaySchema=new Schema({
    //already have id
    question:String,
    players: [
        {
            type:User,
            ref:'user'
        },
        {
            type:User,
            ref:'user'
        }
    ],
    status: Boolean,
});

const Parlay=mongoose.model('parlay',parlaySchema);
// const { Pool }=require('pg');
// const uri=process.env.PG_URI;

// const pool=new Pool({
//     connectionString:uri
// });


// module.exports={
//     query: (text,value,callback) =>{
//         console.log('querying db ',text);
//         return pool.query(text,value,callback);
//     }
// }

module.exports={
    Parlay,
    User
}