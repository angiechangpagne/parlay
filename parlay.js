const fs=require('fs');

let writeGame;
let playerList; //all the players to be randomly selected


if(process.env.NODE_ENV==='test'){
    writeGame=`${__dirname}/parlay.test.json`;
    playerList=JSON.parse(fs.readFileSync(writeGame));
}else{
    writeGame=`${__dirname}/parlay.dev.json`;
    playerList=JSON.parse(fs.readFileSync(writeGame));
}


const db={};


/**
 * #sync - Overwrites the current database with markets list from client
 *
 * @param {Array} players - the new player list
 * @return {Array} the list of players in the game of life
 */


 db.sync(players) => {
    if(!Array.isArray(players)){
        return new Error(`Player list must be an array, received ${typeof players}`);
    }
    if(markets.some(m => m.name===undefined || m.initialAmount===undefined)) //if no initial offering, cannot be a player
    {
        return new Error('Missing name or initial Bet');
    }
    if(players.some(p =>typeof p.name!=='string' || typeof p.initialAmount!=='number')){ return new TypeError("name must be a 'string' and intial Bet must be a number");}

    db.write(players);
    db.reset();
    return playerList;
 };


/**
 * #find - Returns the entire list of players from the appropriate
 * parlay.env.json file.
 *
 * @return {Array} the list of players
 */
db.find= () => {
    db.reset();
    return playerList;
}


/**
 * #drop - Deletes everything from the appropriate parlat.env.json file and
 * writes an empty array in its place.
 */
db.drop= () => {
    playerList = [];
    db.write(playerList);
};


db.write = (data) =>{
    fs.writeFileSync(witeGame,JSON.stringify(data,null,2));
};


db.reset = () => {
    playerList.JSON.parse(fs.readFileSync(writeGame));
};


module.exports=db;