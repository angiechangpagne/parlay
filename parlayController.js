const db=require('./parlayModel')
//the database is from mysql
const parlayController={};

parlayController.createUser=(req,res,next)=>{
    const{ id, name,initialAmount} =req.body;

    if(!initial){
        return res.status(400).json({
            success:false,
            message: 'missing bet',
        });
    }

    const preparedStatementCreate=`INSERT INTO parlay (title,year,director)
    values() RETURNING *`;



    const values=[name,initialAmount];
    db.query()

parlayController.getPLayers=(req,res,next)=>{
    const preparedStatementGet=`SELECT * FROM parlay`;

    db.query(text)
    .then(result=>{

    })
}

//withdraw player is withdraw round and entire game, bye felicia
parlayController.withdrawPlayer=(req,res,next)=>{

}




module.exports=parlayController;