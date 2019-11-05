const express=require('express');



app.use(express.json()); //express built in body parser
const app=express();

const PORT=3000;

const parlayController=require('./parlayController');


app.post('/parlay',parlayController.createUser,(req,res)=>{
    res.json(res.locals.users)
})

//player withdraws after selected randomly on bettiner
app.delete('/players/:id',parlayController.withdrawPlayer)



app.use('*',(req,res)=>{
    res.sendStatue(404);
});

app.use((err,req,res,next)=>{
    res.sendStatus(500);
});



app.listen(PORT,)