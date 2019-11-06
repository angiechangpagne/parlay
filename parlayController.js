const db=require('./model/parlayModel');
const bcrypt=require('bcryptjs');
//the database is from mysql
const parlayController={};

//id is initialized
parlayController.createUser=(req,res,next)=>{
    const{ id, name,initialAmount, currentAmount,status,games} =req.body;
    User.create({ id, name, initialAmount,currentAmount, status,games},(err,doc) => {
        if(err){
            return res.render('./../client/index',{ error: `${req.body.name} already exists`});
        }else{
            res.locals.id=doc._id;
            return next();
        }
    });
    // if(!initialAmount){
    //     return res.status(400).json({
    //         success:false,
    //         message: 'missing bet',
    //     });
    // }

    // const preparedStatementCreate=`INSERT INTO parlay (name,initialAmount,currentAmount,status)
    // values($1,$2,$3,$4) RETURNING *`
    // ;


    // const values=[name,initialAmount,currentAmount,status];

    // db.query(preparedStatementCreate,values,(err,result)=>{
    //     if(err){
    //         console.log('Error in parlayControllre.createUser: ',err);
    //         return res.sendStatus(500);
    //     }
    //     res.locals.parlay=result.rows;
    //     return next();
    // });

};
 
//randomly selects the players from database and use their intal inputted bets(initialAmounts) if they want to change amount they can edit(wimp!) or they can withdraw and leave the game(bye felicia)
parlayController.generateGame=(req,res,next)=>{
    Parlay.create({id,question,users},(err,doc) => {
        if(err){
            return res.render('./../client/index',{ error: `${req.body.id} already exists`});
        }else{
            res.locals.id=doc._id;
            return next();
        }
    });
};

parlayController.changeAmount=(req,res,next) =>{

}
    //using a promist
    // db.query(text,values)
    // .then(result => {
    //     res.locals.parlay=result.rows;
    //     next();
    // })
    // .catch(err => {
    //     console.log('Eror in parlayController.createUser: ',err);
    //     return res.sendStatus(500);
    // })

parlayController.getPlayers=(req,res,next)=>{
    
    User.find({}).exec()
        .then(peopleDocs => {
            res.locals.characters=peopleDocs;
            next();
        })
        .catch(err => {
            next({
                log:`parlayController.getPlayers: ERROR: ${err}`,
                message: { err: 'Error occurred in parlayController.getPlayers'}
            });
        });
    
    // const preparedStatementGet=`SELECT * FROM parlay
    // `;

    // db.query(preparedStatementGet)
    // .then(result=>{
    //     res.locals.parlay=result.row;
    //     next();
    // })
    // .catch(err=>{
    //     console.log('Error in parlayController.getPlayers: ',err);
    //     return res.sendStatus(500);
    // })
}

parlayController.getUser=(req,res,next) => {
    const _id=req.query.id;
    models.User.findOne({_id})
    .then(userDoc => {
        res.locals.user=userDoc;
        next();
    })
    .catch(err => {
        next({
            log:`parlayController.getUser: ERROR: ${err}`,
            message: { err: 'Error occurred in parlayController.getUser'}
        });
    });
}

//withdraw player is withdraw round and entire game, bye felicia
parlayController.withdrawPlayer=(req,res,next)=>{
    const { id }=req.params;

    const preparedStatementDelete=`
    DELETE FROM parlay
    WHERE id=$1
    RETURNING *
    `;

    const values=[ id ] ;
    db.query(preparedStatementDelete,values)
    .then(result => {
        res.locals.parlay=result.rows; //replace the database element with nothing?
        next();
    })
    .catch(err => {
        console.log('Error in parlayController.withdrawPlayer: ', err);
        return res.sendStatus(500);
    })
}


module.exports=parlayController;