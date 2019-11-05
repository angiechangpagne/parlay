const db=require('./parlayModel')
//the database is from mysql
const parlayController={};

//id is initialized
parlayController.createUser=(req,res,next)=>{
    const{ id, name,initialAmount, currentAmount,status} =req.body;

    if(!initialAmount){
        return res.status(400).json({
            success:false,
            message: 'missing bet',
        });
    }

    const preparedStatementCreate=`INSERT INTO parlay (name,initialAmount,currentAmount,status)
    values($1,$2,$3,$4) RETURNING *`
    ;


    const values=[name,initialAmount,currentAmount,status];

    db.query(preparedStatementCreate,values,(err,result)=>{
        if(err){
            console.log('Error in parlayControllre.createUser: ',err);
            return res.sendStatus(500);
        }
        res.locals.parlay=result.rows;
        return next();
    });

}
 
//randomly selects the players from database and use their intal inputted bets(initialAmounts) if they want to change amount they can edit(wimp!) or they can withdraw and leave the game(bye felicia)
parlayController.generateGame=(req,res,next)=>{
        
}

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
    const preparedStatementGet=`SELECT * FROM parlay
    `;

    db.query(preparedStatementGet)
    .then(result=>{
        res.locals.parlay=result.row;
        next();
    })
    .catch(err=>{
        console.log('Error in parlayController.getPlayers: ',err);
        return res.sendStatus(500);
    })
};


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