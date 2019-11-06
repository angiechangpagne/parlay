
const path=require('path');
//const db=require('./db/parlay');
const express=require('express');
const app=express();//digital instance
const PORT=process.env.PORT || 3000;
const parlayController=require('./parlayController');
//the server aka index.js in server folder
app.use(express.static(path.resolve(__dirname,'../dist')));
app.use(express.json()); //express built in body parser
// const bodyParser=require('body-parser');
//app.use(bodyParser.json());
//app.user(bodyParser.urlencoded({ extended: true }));
app.use('/assets',express.static(path.resolve(__dirname,'../client/assets')));

const apiRouter=require('./routes/api');

app.use('/api',apiRouter); //define route handlers


app.post('/parlay',parlayController.createUser,(req,res) => {
    res.json(res.locals.parlay);
});

app.get('/',(req,res) => res.status(200).sendFile(path.resolve(__dirname,'../client/index.html')));


app.get('/parlay',parlayController.getParlay,(req,res) => {
    res.json(db.find());
    //res.json(res.locals.parlays);
});

//player withdraws after selected randomly on bettiner
app.delete('/parlay/:id',parlayController.withdrawPlayer, (req,res) => {
    res.json(res.locals.parlay);
});

//use can edit their bet(initiaAmount) during the creation of a game,
app.put('/parlay',(req,res,next) => {
    const syncResult=db.sync(req.body);
    if(syncResult instanceof Error){
        return next({code:40, error: syncResult });
    }
    res.json(syncResult); //response is in the form of a json object 
});



app.use('*',(req,res)=>{
    res.sendStatus(404);
});

app.use((err,req,res,next) => {
    console.log(err);
    res.sendStatus(500);
});



app.listen(PORT, ()=>console.log(`listening on port ${PORT}...`));

module.exports=app;